"""
安全认证核心逻辑
"""
from datetime import datetime, timedelta
from typing import Optional, Dict, Any
from jose import JWTError, jwt
from passlib.context import CryptContext
from app.core import config

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto", bcrypt__truncate_error=False)


def get_password_hash(password: str) -> str:
    # bcrypt 只支持最多 72 字节，截断处理
    return pwd_context.hash(password[:72])


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password[:72], hashed_password)


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=config.jwt_expire_minutes))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, config.jwt_secret, algorithm=config.jwt_algorithm)


def verify_token(token: str) -> Dict[str, Any]:
    """验证 token，返回 {"valid": bool, "username": str}"""
    try:
        payload = jwt.decode(token, config.jwt_secret, algorithms=[config.jwt_algorithm])
        username: str = payload.get("sub")
        if username is None:
            return {"valid": False}
        return {"valid": True, "username": username}
    except JWTError:
        return {"valid": False}
