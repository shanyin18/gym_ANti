"""
Redis 缓存管理器 (异步版本)
封装 Redis 连接和常用操作
"""
import redis.asyncio as aioredis
import hashlib
from typing import Optional
import config


class AsyncCacheManager:
    _instance = None
    _initialized = False

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(AsyncCacheManager, cls).__new__(cls)
        return cls._instance

    async def init_redis(self):
        """初始化 Redis 连接 (异步)"""
        if self._initialized:
            return
        try:
            self.redis_client = aioredis.Redis(
                host=config.redis_host,
                port=config.redis_port,
                db=config.redis_db,
                password=config.redis_password,
                decode_responses=True
            )
            await self.redis_client.ping()
            print(f"✅ Connected to Redis at {config.redis_host}:{config.redis_port} (Async)")
            self.is_connected = True
            self._initialized = True
        except Exception as e:
            print(f"❌ Failed to connect to Redis: {e}")
            self.is_connected = False
            self.redis_client = None

    async def get(self, key: str) -> Optional[str]:
        """获取缓存 (异步)"""
        if not self.is_connected:
            return None
        try:
            return await self.redis_client.get(key)
        except Exception as e:
            print(f"Redis get error: {e}")
            return None

    async def set(self, key: str, value: str, ttl: int = 3600) -> bool:
        """设置缓存 (异步, 默认 1 小时过期)"""
        if not self.is_connected:
            return False
        try:
            return await self.redis_client.setex(key, ttl, value)
        except Exception as e:
            print(f"Redis set error: {e}")
            return False

    def generate_key(self, prefix: str, *args) -> str:
        """生成缓存 Key (MD5 hash)"""
        content = "".join(str(arg) for arg in args)
        hash_str = hashlib.md5(content.encode('utf-8')).hexdigest()
        return f"{prefix}:{hash_str}"


# 全局单例
cache_manager = AsyncCacheManager()
