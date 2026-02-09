"""
用户认证模块 (异步版本)
"""
import bcrypt
from datetime import datetime, timedelta
from typing import Optional
from jose import JWTError, jwt
from sqlalchemy import text
from database import async_engine
import config


async def init_users_table():
    """创建用户表 (异步)"""
    try:
        create_sql = """
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """
        async with async_engine.begin() as conn:
            await conn.execute(text(create_sql))
        print("✅ Users table verified/created")
    except Exception as e:
        print(f"❌ Users table creation failed: {repr(e)}")


def get_password_hash(password: str) -> str:
    """使用 bcrypt 生成密码哈希"""
    pwd_bytes = password.encode('utf-8')
    if len(pwd_bytes) > 72:
        pwd_bytes = pwd_bytes[:72]
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(pwd_bytes, salt).decode('utf-8')


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """验证密码"""
    plain_password_bytes = plain_password.encode('utf-8')
    if len(plain_password_bytes) > 72:
        plain_password_bytes = plain_password_bytes[:72]
    hashed_password_bytes = hashed_password.encode('utf-8')
    return bcrypt.checkpw(plain_password_bytes, hashed_password_bytes)


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=config.jwt_expire_minutes))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, config.jwt_secret, algorithm=config.jwt_algorithm)


def verify_token(token: str) -> dict:
    """验证 token，返回 {"valid": bool, "username": str}"""
    try:
        payload = jwt.decode(token, config.jwt_secret, algorithms=[config.jwt_algorithm])
        username: str = payload.get("sub")
        if username is None:
            return {"valid": False}
        return {"valid": True, "username": username}
    except JWTError:
        return {"valid": False}


async def register_user(username: str, password: str) -> dict:
    """注册新用户 (异步)"""
    check_sql = "SELECT id FROM users WHERE username = :username"
    async with async_engine.connect() as conn:
        result = await conn.execute(text(check_sql), {"username": username})
        if result.fetchone():
            raise ValueError("用户名已存在")

    insert_sql = "INSERT INTO users (username, password_hash) VALUES (:username, :password_hash)"
    async with async_engine.begin() as conn:
        await conn.execute(text(insert_sql), {
            "username": username,
            "password_hash": get_password_hash(password)
        })

    return {"success": True, "message": "注册成功"}


async def login_user(username: str, password: str) -> dict:
    """用户登录 (异步)"""
    select_sql = "SELECT id, username, password_hash FROM users WHERE username = :username"
    async with async_engine.connect() as conn:
        result = await conn.execute(text(select_sql), {"username": username})
        user = result.fetchone()

        if not user:
            raise ValueError("用户名或密码错误")

        if not verify_password(password, user.password_hash):
            raise ValueError("用户名或密码错误")

        access_token = create_access_token(data={"sub": username})
        return {
            "token": access_token,
            "username": username,
            "message": "登录成功"
        }
