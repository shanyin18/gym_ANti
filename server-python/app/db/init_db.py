"""
数据库初始化逻辑
"""
from sqlalchemy import text
from app.db.session import engine
from app.db.crud.users import create_users_table
from app.db.crud.profile import create_profiles_table


def init_db():
    """初始化数据库和表"""
    # 检查连接
    try:
        with engine.connect() as conn:
            conn.execute(text("SELECT 1"))
        print("PostgreSQL Database Connected Successfully")
    except Exception as e:
        print(f"PostgreSQL Connection Failed: {repr(e)}")
        # 连接失败通常意味着服务没起或者配置错，但此处我们不抛出异常以免阻塞应用启动（虽然可能会导致后续报错）
        return False
    
    # 创建表
    create_users_table()
    create_profiles_table()
    return True
