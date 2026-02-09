"""
用户档案管理模块 (异步版本)
"""
from sqlalchemy import text
from database import async_engine


async def init_profiles_table():
    """创建用户档案表 (异步)"""
    try:
        create_sql = """
            CREATE TABLE IF NOT EXISTS user_profiles (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                age INT,
                gender VARCHAR(20),
                height FLOAT,
                weight FLOAT,
                goal VARCHAR(255),
                daily_calories INT,
                daily_protein INT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """
        async with async_engine.begin() as conn:
            await conn.execute(text(create_sql))
        print("✅ User profiles table verified/created")
    except Exception as e:
        print(f"❌ Profiles table creation failed: {repr(e)}")


async def get_profile(username: str) -> dict | None:
    """获取用户档案 (异步)"""
    select_sql = """
        SELECT age, gender, height, weight, goal, daily_calories, daily_protein 
        FROM user_profiles WHERE username = :username
    """
    async with async_engine.connect() as conn:
        result = await conn.execute(text(select_sql), {"username": username})
        row = result.fetchone()
        if row:
            return {
                "age": row.age,
                "gender": row.gender,
                "height": row.height,
                "weight": row.weight,
                "goal": row.goal,
                "daily_calories": row.daily_calories,
                "daily_protein": row.daily_protein,
            }
        return None


async def save_profile(username: str, profile_data: dict) -> dict:
    """保存或更新用户档案 (异步)"""
    upsert_sql = """
        INSERT INTO user_profiles 
        (username, age, gender, height, weight, goal, daily_calories, daily_protein)
        VALUES (:username, :age, :gender, :height, :weight, :goal, :daily_calories, :daily_protein)
        ON CONFLICT (username) DO UPDATE SET
            age = EXCLUDED.age,
            gender = EXCLUDED.gender,
            height = EXCLUDED.height,
            weight = EXCLUDED.weight,
            goal = EXCLUDED.goal,
            daily_calories = EXCLUDED.daily_calories,
            daily_protein = EXCLUDED.daily_protein,
            updated_at = CURRENT_TIMESTAMP
    """
    async with async_engine.begin() as conn:
        await conn.execute(text(upsert_sql), {
            "username": username,
            "age": profile_data.get("age"),
            "gender": profile_data.get("gender"),
            "height": profile_data.get("height"),
            "weight": profile_data.get("weight"),
            "goal": profile_data.get("goal"),
            "daily_calories": profile_data.get("daily_calories", 2000),
            "daily_protein": profile_data.get("daily_protein", 100),
        })
    return {"success": True, "message": "档案保存成功"}
