"""
用户相关数据库操作
"""
from sqlalchemy import text
from app.db.session import engine


def create_users_table():
    """创建用户表"""
    try:
        create_sql = """
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """
        with engine.connect() as conn:
            conn.execute(text(create_sql))
            conn.commit()
        print("Users table verified/created")
    except Exception as e:
        print(f"Users table creation failed: {repr(e)}")


def get_user_by_username(username: str):
    """根据用户名获取用户"""
    select_sql = "SELECT id, username, password_hash FROM users WHERE username = :username"
    with engine.connect() as conn:
        result = conn.execute(text(select_sql), {"username": username})
        return result.fetchone()


def create_user(username: str, password_hash: str):
    """创建新用户"""
    insert_sql = "INSERT INTO users (username, password_hash) VALUES (:username, :password_hash)"
    with engine.connect() as conn:
        conn.execute(text(insert_sql), {
            "username": username,
            "password_hash": password_hash
        })
        conn.commit()
