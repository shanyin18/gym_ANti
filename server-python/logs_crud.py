"""
日志相关数据库操作（同步）
"""
import re
from datetime import datetime
from sqlalchemy import text

from sync_db import engine


def sanitize_table_name(username: str) -> str:
    return f"user_{re.sub(r'[^a-zA-Z0-9]', '_', username)}_logs"


def create_user_log_table(username: str):
    table_name = sanitize_table_name(username)
    create_sql = f"""
        CREATE TABLE IF NOT EXISTS "{table_name}" (
            id SERIAL PRIMARY KEY,
            Date VARCHAR(50),
            TimeOfDay VARCHAR(50),
            Type VARCHAR(50),
            Content TEXT,
            Calories INT,
            Protein INT,
            timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """
    with engine.connect() as conn:
        conn.execute(text(create_sql))
        conn.commit()


def append_log(username: str, log_data: dict):
    table_name = sanitize_table_name(username)
    date_value = log_data.get("datetime", datetime.now().isoformat())
    if "T" in date_value:
        date_value = date_value.split("T")[0]

    insert_sql = f"""
        INSERT INTO "{table_name}" (Date, TimeOfDay, Type, Content, Calories, Protein)
        VALUES (:date, :time_of_day, :type, :content, :calories, :protein)
    """
    with engine.connect() as conn:
        result = conn.execute(text(insert_sql), {
            "date": date_value,
            "time_of_day": log_data.get("timeOfDay", "Unknown"),
            "type": log_data.get("type", "Note"),
            "content": log_data.get("content", ""),
            "calories": log_data.get("calories", 0),
            "protein": log_data.get("protein", 0),
        })
        conn.commit()
        return result.lastrowid


def get_history_logs(username: str, limit: int = 20) -> list:
    table_name = sanitize_table_name(username)
    select_sql = f'SELECT * FROM "{table_name}" ORDER BY id DESC LIMIT :limit'
    try:
        with engine.connect() as conn:
            result = conn.execute(text(select_sql), {"limit": limit})
            rows = [dict(row._mapping) for row in result]
            return list(reversed(rows))
    except Exception:
        return []


def get_today_logs(username: str) -> list:
    table_name = sanitize_table_name(username)
    today = datetime.now().strftime("%Y-%m-%d")
    select_sql = f"""
        SELECT * FROM "{table_name}" 
        WHERE Date = :today AND (Type = 'Diet' OR Type = '饮食') 
        ORDER BY id ASC
    """
    try:
        with engine.connect() as conn:
            result = conn.execute(text(select_sql), {"today": today})
            return [dict(row._mapping) for row in result]
    except Exception:
        return []
