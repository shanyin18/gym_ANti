"""
API 依赖项
"""
from typing import Generator
from fastapi import Depends, HTTPException, status, Header
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.core.security import verify_token
from app.db.crud import users as users_crud


def get_db() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


def get_current_user(authorization: str = Header(None)) -> dict:
    """从 Authorization header 提取并验证 token"""
    if not authorization:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="需要登录",
        )
    
    # Bearer TOKEN 格式
    try:
        scheme, token = authorization.split()
        if scheme.lower() != "bearer":
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Token 格式错误",
            )
    except ValueError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token 格式错误",
        )
    
    # 验证 Token
    payload = verify_token(token)
    if not payload.get("valid"):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="登录已过期",
        )
    
    # 获取用户信息 (可选: 从 DB 验证用户是否存在)
    username = payload.get("username")
    user = users_crud.get_user_by_username(username)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="用户不存在",
        )
    
    return {"username": username, "id": user.id}
