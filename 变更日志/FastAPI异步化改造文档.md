# FastAPI 异步化改造实施记录

> **日期**: 2026-02-09  
> **执行人**: Antigravity Agent  
> **目标**: 将 FastAPI 后端从同步架构迁移到完全异步 (Async/Await) 架构，以提升高并发处理能力。

---

## 1. 改造核心逻辑

异步化改造的核心在于将 **I/O 密集型操作**（如数据库查询、网络请求）从“阻塞等待”改为“非阻塞挂起”。

1.  **数据库层 (Database Layer)**:
    *   **驱动更换**: 从 `psycopg2` (同步) 切换到 `asyncpg` (异步)，这是 Python 中性能最好的 PostgreSQL 异步驱动。
    *   **ORM 升级**: 使用 SQLAlchemy 2.0 的 `AsyncEngine` 和 `AsyncSession`，彻底抛弃阻塞式的 `Session`。
    *   **连接池**: 配置异步连接池，允许同时处理多个数据库请求。

2.  **服务层 (Service Layer)**:
    *   **全链路 Async**: 从最底层的 CRUD 函数到最上层的 API 路由，整条调用链上的函数都必须是 `async def`，调用时必须 `await`。
    *   **Redis 改造**: 引入 `redis.asyncio`，让缓存读取也不再阻塞主线程。

3.  **API 层 (Main Application)**:
    *   **生命周期管理**: 使用 `lifespan` 异步上下文管理器，在应用启动时 `await` 数据库和 Redis 的初始化。

---

## 2. 代码实现对比 (Before vs After)

### 2.1 数据库配置 (`config.py`)

**🔴 Before (同步):**
```python
# 使用 psycopg2 (同步驱动)
database_url = f"postgresql+psycopg2://{user}:{password}@{host}/{db}"
```

**🟢 After (异步):**
```python
# 使用 asyncpg (异步驱动)
async_database_url = f"postgresql+asyncpg://{user}:{password}@{host}/{db}"
```

### 2.2 数据库连接与会话 (`database.py`)

**🔴 Before (同步阻塞):**
```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# 1. 创建同步引擎
engine = create_engine(config.database_url)
# 2. 创建同步会话工厂
SessionLocal = sessionmaker(bind=engine)

# 3. 阻塞式执行 SQL
def login_user(username):
    # 线程在此处卡住，直到数据库返回
    with engine.connect() as conn:
        result = conn.execute(text("SELECT ..."))
```

**🟢 After (异步非阻塞):**
```python
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker

# 1. 创建异步引擎
async_engine = create_async_engine(config.async_database_url)
# 2. 创建异步会话工厂
AsyncSessionLocal = async_sessionmaker(bind=async_engine)

# 3. 异步执行 SQL
async def login_user(username):
    # 线程在此处挂起 (await)，去处理其他请求，直到数据库返回
    async with async_engine.connect() as conn:
        result = await conn.execute(text("SELECT ..."))
```

### 2.3 业务逻辑与路由 (`main.py` & `auth.py`)

**🔴 Before (同步等待):**
```python
# auth.py
def register_user(username, password):
    # ... 同步写库 ...
    conn.execute(...) 

# main.py
@app.post("/register")
def api_register(req):
    # 调用同步函数，主线程被占用
    register_user(req.username, req.password)
    return {"msg": "ok"}
```

**🟢 After (异步并发):**
```python
# auth.py
async def register_user(username, password):
    # ... 异步写库 ...
    await conn.execute(...)

# main.py
@app.post("/register")
async def api_register(req):
    # await 释放控制权，允许并发处理
    await register_user(req.username, req.password)
    return {"msg": "ok"}
```

### 2.4 Redis 缓存 (`cache_manager.py`)

**🔴 Before (同步):**
```python
import redis
client = redis.Redis(...)

def get(key):
    return client.get(key) # 阻塞
```

**🟢 After (异步):**
```python
import redis.asyncio as aioredis
client = aioredis.Redis(...)

async def get(key):
    return await client.get(key) # 非阻塞
```

---

## 3. 改造收益
*   **高并发**: 单个进程可以同时处理成百上千个请求，而不是受限于线程数。
*   **低延迟**: 在 CPU 闲置时（如等待数据库查询时），立即切换处理其他请求，减少排队等待时间。
*   **资源利用率**: 相同的硬件资源下，能支撑更高的 QPS。
