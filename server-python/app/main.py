"""
FastAPI 主入口 (Refactored) - Force reload
"""
from typing import AsyncGenerator
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.api import api_router
from app.db.init_db import init_db
from app.services.agent_service import init_agent_service

# ============ Lifespan (启动/关闭) ============
@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator:
    # 启动时
    print("Starting FastAPI server...")
    
    # 1. 初始化数据库
    if init_db():
        print("Database initialized.")
    else:
        print("Warning: Database initialization failed.")
        
    # 2. 初始化 Agent 服务 (Week 3 升级)
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

# 注册路由
app.include_router(api_router, prefix="/api")

# 健康检查 (直接挂载到根或 /health)
@app.get("/health")
async def health_check():
    """健康检查"""
    from datetime import datetime
    return {
        "status": "ok",
        "timestamp": datetime.now().isoformat(),
        "database": "connected", # TODO: check connection dynamically if needed
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
