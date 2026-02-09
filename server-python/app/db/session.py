"""
数据库连接会话管理
"""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.core import config

engine = create_engine(config.database_url, pool_pre_ping=True, pool_size=10)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db():
    """FastAPI 依赖注入"""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
