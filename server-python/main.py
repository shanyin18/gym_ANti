"""
FastAPI 主入口
"""
from datetime import datetime
from typing import Optional
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException, Depends, Header, File, UploadFile
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from database import init_db, create_user_table, append_log, get_history_logs, get_today_logs
from auth import init_users_table, register_user, login_user, verify_token
from profile import init_profiles_table, get_profile, save_profile
from cache_manager import cache_manager
from app.services.agent_service import init_agent_service, get_agent_service
from vector_store import VectorStoreService
from app.services.pdf_parser import get_pdf_parser
from prometheus_fastapi_instrumentator import Instrumentator


# ============ Pydantic Models ============
class RegisterRequest(BaseModel):
    username: str
    password: str


class LoginRequest(BaseModel):
    username: str
    password: str


class ProfileRequest(BaseModel):
    age: Optional[int] = None
    gender: Optional[str] = None
    height: Optional[float] = None
    weight: Optional[float] = None
    goal: Optional[str] = None
    daily_calories: Optional[int] = 2000
    daily_protein: Optional[int] = 100


class ChatRequest(BaseModel):
    message: str


class KnowledgeRequest(BaseModel):
    title: Optional[str] = ""
    content: str


# ============ Lifespan (启动/关闭) ============
@asynccontextmanager
async def lifespan(app: FastAPI):
    # 启动时
    print("Starting FastAPI server (Async Mode)...")
    await init_db()
    await init_users_table()
    await init_profiles_table()
    await cache_manager.init_redis()
    try:
        init_agent_service()
    except Exception as e:
        print(f"Startup Warning: Agent Service failed to initialize: {e}")
    yield
    # 关闭时
    print("Shutting down...")


app = FastAPI(
    title="Gym ANti API",
    description="AI健身助手后端 - FastAPI + LangChain + RAG",
    version="2.0.0",
    lifespan=lifespan,
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Prometheus 指标埋点 — 自动记录 QPS / 延迟 / 错误率
Instrumentator().instrument(app).expose(app, endpoint="/metrics")


from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

security = HTTPBearer()

# ============ 认证依赖 ============
async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)) -> dict:
    """使用 FastAPI 标准 Security 依赖验证 Token"""
    token = credentials.credentials
    
    result = verify_token(token)
    
    if not result.get("valid"):
        raise HTTPException(status_code=403, detail="登录已过期")
    
    return result


# ============ API 路由 ============

@app.post("/api/register")
async def api_register(req: RegisterRequest):
    """用户注册"""
    try:
        if not req.username or not req.password:
            raise HTTPException(status_code=400, detail="用户名和密码不能为空")
        
        await register_user(req.username, req.password)
        await create_user_table(req.username)
        
        return {"success": True, "message": "注册成功"}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.post("/api/login")
async def api_login(req: LoginRequest):
    """用户登录"""
    try:
        if not req.username or not req.password:
            raise HTTPException(status_code=400, detail="用户名和密码不能为空")
        
        result = await login_user(req.username, req.password)
        return result
    except ValueError as e:
        raise HTTPException(status_code=401, detail=str(e))


@app.get("/api/profile")
async def api_get_profile(user: dict = Depends(get_current_user)):
    """获取用户档案"""
    profile = await get_profile(user["username"])
    return {"profile": profile}


@app.post("/api/profile")
async def api_save_profile(req: ProfileRequest, user: dict = Depends(get_current_user)):
    """保存用户档案"""
    try:
        result = await save_profile(user["username"], req.model_dump())
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


# ============ 知识库管理 API ============

@app.post("/api/knowledge")
async def api_add_knowledge(req: KnowledgeRequest, user: dict = Depends(get_current_user)):
    """添加资料到知识库"""
    try:
        if not req.content:
            raise HTTPException(status_code=400, detail="内容不能为空")
        
        agent_service = get_agent_service()
        doc_id = agent_service.vector_service.add_document(req.content, req.title)
        
        return {"success": True, "doc_id": doc_id, "message": "资料添加成功"}
    except Exception as e:
        print(f"Add knowledge error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/knowledge")
async def api_get_knowledge(user: dict = Depends(get_current_user)):
    """获取所有用户上传的资料"""
    try:
        agent_service = get_agent_service()
        docs = agent_service.vector_service.get_all_documents()
        return {"documents": docs}
    except Exception as e:
        print(f"Get knowledge error: {e}")
        return {"documents": []}


@app.delete("/api/knowledge/{doc_id}")
async def api_delete_knowledge(doc_id: str, user: dict = Depends(get_current_user)):
    """删除指定资料"""
    try:
        agent_service = get_agent_service()
        agent_service.vector_service.delete_document(doc_id)
        # Milvus delete 不报错就算成功（不会返回删除数量）
        return {"success": True, "message": "删除成功"}
    except Exception as e:
        print(f"Delete knowledge error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


        raise HTTPException(status_code=500, detail=str(e))


class BatchDeleteRequest(BaseModel):
    doc_ids: list[str]


@app.post("/api/knowledge/batch-delete")
async def api_batch_delete_knowledge(request: BatchDeleteRequest, user: dict = Depends(get_current_user)):
    """批量删除指定的资料"""
    try:
        agent_service = get_agent_service()
        count = agent_service.vector_service.delete_documents(request.doc_ids)
        return {"success": True, "message": f"成功删除 {count} 条资料", "deleted_count": count}
    except Exception as e:
        print(f"Batch delete error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


# ============ PDF 解析 API ============

@app.post("/api/parse-pdf")
async def api_parse_pdf(file: UploadFile = File(...), user: dict = Depends(get_current_user)):
    """
    解析上传的 PDF 文件
    
    - 支持包含表格、图片的复杂 PDF
    - 返回结构化的文本、表格、图片信息
    - 可选将内容添加到知识库
    """
    import tempfile
    import os
    
    # 验证文件类型
    if not file.filename.lower().endswith('.pdf'):
        raise HTTPException(status_code=400, detail="只支持 PDF 文件")
    
    try:
        # 保存上传文件到临时目录
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
            content = await file.read()
            tmp.write(content)
            tmp_path = tmp.name
        
        # 解析 PDF
        parser = get_pdf_parser()
        result = await parser.parse_pdf(tmp_path)
        
        # 清理临时文件
        os.unlink(tmp_path)
        
        return {
            "success": True,
            "filename": result["filename"],
            "element_count": result["element_count"],
            "texts": result["texts"][:10],  # 只返回前10段文本预览
            "tables": [{"index": t["index"], "preview": t["text"][:200]} for t in result["tables"]],
            "images": result["images"],
            "document_count": len(result["documents"]),
        }
    
    except Exception as e:
        print(f"PDF Parse error: {e}")
        raise HTTPException(status_code=500, detail=f"PDF 解析失败: {str(e)}")


@app.post("/api/parse-pdf/add-to-knowledge")
async def api_pdf_to_knowledge(file: UploadFile = File(...), user: dict = Depends(get_current_user)):
    """
    解析 PDF 并将内容添加到知识库
    """
    import tempfile
    import os
    
    if not file.filename.lower().endswith('.pdf'):
        raise HTTPException(status_code=400, detail="只支持 PDF 文件")
    
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
            content = await file.read()
            tmp.write(content)
            tmp_path = tmp.name
        
        parser = get_pdf_parser()
        result = await parser.parse_pdf(tmp_path)
        os.unlink(tmp_path)
        
        # 提取所有文本块
        chunks = [doc.page_content for doc in result["documents"] if doc.page_content.strip()]
        
        # 使用 add_pdf_document 方法：创建一个主记录 + 多个切分块
        agent_service = get_agent_service()
        pdf_id = agent_service.vector_service.add_pdf_document(
            filename=result["filename"],
            chunks=chunks,
            chunk_count=len(chunks)
        )
        
        return {
            "success": True,
            "filename": result["filename"],
            "pdf_id": pdf_id,
            "added_documents": len(chunks),
            "message": f"成功添加 PDF（{len(chunks)} 个文本块）到知识库"
        }
    
    except Exception as e:
        print(f"PDF to Knowledge error: {e}")
        raise HTTPException(status_code=500, detail=f"处理失败: {str(e)}")


@app.post("/api/chat/stream")
async def api_chat_stream(req: ChatRequest, user: dict = Depends(get_current_user)):
    """
    流式 AI 对话 (黑马风格 SSE)
    
    使用 Server-Sent Events 逐 token 输出
    前端需要用 EventSource 或 fetch + ReadableStream 接收
    """
    username = user["username"]
    print(f"Stream Request ({username}): {req.message}")
    
    if not req.message:
        raise HTTPException(status_code=400, detail="Message required")
    
    # 获取用户档案和历史记录
    user_profile = await get_profile(username)
    if not user_profile:
        user_profile = {}
    user_profile["username"] = username # 强制注入用户名，让 Agent 知道是谁
    
    history_logs = await get_history_logs(username)
    agent_service = get_agent_service()
    
    async def generate():
        """
        异步生成器 - SSE 格式输出
        格式: data: {chunk}\n\n
        """
        async for chunk in agent_service.process_stream(req.message, history_logs, user_profile):
            # SSE 标准格式: 多行内容必须每一行都加 data: 前缀
            # 否则前端 EventSource 只会读取第一行，导致 "计算结果：" 后的内容丢失
            formatted_chunk = chunk.replace("\n", "\ndata: ")
            yield f"data: {formatted_chunk}\n\n"
        # 结束标记
        yield "data: [DONE]\n\n"
    
    return StreamingResponse(
        generate(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",  # 禁用 Nginx 缓冲
        }
    )


@app.get("/api/history")
async def api_history(user: dict = Depends(get_current_user)):
    """获取历史记录"""
    try:
        history = await get_history_logs(user["username"])
        return history
    except Exception as e:
        print(f"History Error: {e}")
        return []


@app.get("/api/daily-log")
async def api_daily_log(user: dict = Depends(get_current_user)):
    """获取今日日志"""
    try:
        username = user["username"]
        logs = await get_today_logs(username)
        user_profile = await get_profile(username)
        
        target_calories = user_profile.get("daily_calories", 2000) if user_profile else 2000
        target_protein = user_profile.get("daily_protein", 100) if user_profile else 100
        
        # 时间映射
        time_mapping = {
            "Breakfast": "早餐", "Morning": "早餐", "早餐": "早餐", "早上": "早餐",
            "Lunch": "午餐", "Noon": "午餐", "Afternoon": "午餐", "午餐": "午餐", "中午": "午餐",
            "Dinner": "晚餐", "Evening": "晚餐", "晚餐": "晚餐", "晚上": "晚餐",
            "Snack": "其他", "加餐": "其他",
        }
        
        grouped = {"早餐": [], "午餐": [], "晚餐": [], "其他": []}
        total_calories = 0
        total_protein = 0
        
        for log in logs:
            normalized_meal = time_mapping.get(log.get("TimeOfDay", ""), "其他")
            grouped[normalized_meal].append({
                "content": log.get("Content", ""),
                "calories": log.get("Calories", 0),
                "protein": log.get("Protein", 0),
            })
            total_calories += log.get("Calories", 0)
            total_protein += log.get("Protein", 0)
        
        # 计算每餐小计
        result = {}
        for meal, items in grouped.items():
            if items:
                result[meal] = {
                    "items": items,
                    "subtotal": {
                        "calories": sum(i["calories"] for i in items),
                        "protein": sum(i["protein"] for i in items),
                    }
                }
        
        return {
            "date": datetime.now().strftime("%Y-%m-%d"),
            "meals": result,
            "total": {"calories": total_calories, "protein": total_protein},
            "target": {"calories": target_calories, "protein": target_protein},
        }
    
    except Exception as e:
        print(f"Daily Log Error: {e}")
        return {
            "date": "",
            "meals": {},
            "total": {"calories": 0, "protein": 0},
            "target": {"calories": 2000, "protein": 100},
        }


@app.get("/health")
async def health_check():
    """健康检查"""
    try:
        db_status = await init_db()
        return {
            "status": "ok",
            "timestamp": datetime.now().isoformat(),
            "database": "connected" if db_status else "disconnected",
        }
    except Exception as e:
        raise HTTPException(status_code=503, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
