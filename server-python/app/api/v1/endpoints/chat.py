from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse
from app.api import deps
from app.schemas.chat import ChatRequest
from app.services.agent_service import get_agent_service
from app.db.crud import logs as logs_crud
from app.db.crud import profile as profile_crud

router = APIRouter()


@router.post("/chat/stream")
async def chat_stream(req: ChatRequest, user: dict = Depends(deps.get_current_user)):
    """
    流式 AI 对话 (黑马风格 SSE)
    """
    username = user["username"]
    print(f"Stream Request ({username}): {req.message}")
    
    if not req.message:
        raise HTTPException(status_code=400, detail="Message required")
    
    # 获取用户档案和历史记录
    user_profile = profile_crud.get_profile_by_username(username)
    history_logs = logs_crud.get_history_logs(username)
    agent_service = get_agent_service()
    
    async def generate():
        """
        异步生成器 - SSE 格式输出
        格式: data: {chunk}\n\n
        """
        async for chunk in agent_service.process_stream(req.message, history_logs, user_profile):
            # SSE 标准格式
            yield f"data: {chunk}\n\n"
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


@router.get("/history")
async def get_history(user: dict = Depends(deps.get_current_user)):
    """获取历史记录"""
    try:
        history = logs_crud.get_history_logs(user["username"])
        return history
    except Exception as e:
        print(f"History Error: {e}")
        return []


@router.get("/daily-log")
async def get_daily_log(user: dict = Depends(deps.get_current_user)):
    """获取今日日志"""
    try:
        username = user["username"]
        logs = logs_crud.get_today_logs(username)
        user_profile = profile_crud.get_profile_by_username(username)
        
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
