"""
配置管理模块
集中管理所有配置项，参考黑马教程 config_data.py 风格
"""
import os
from dotenv import load_dotenv

# 保持容器注入环境变量优先，避免 .env 覆盖 docker-compose 的 DB/Milvus 配置
load_dotenv(override=False)

# ============ 数据库配置 ============
db_host = os.getenv("DB_HOST", "localhost")
db_user = os.getenv("DB_USER", "postgres")
db_password = os.getenv("DB_PASSWORD", "")
db_name = os.getenv("DB_NAME", "gym_anti")
db_port = os.getenv("DB_PORT", "5432")

# 完整的数据库连接 URL (同步)
database_url = (
    f"postgresql+psycopg2://{db_user}:{db_password}"
    f"@{db_host}:{db_port}/{db_name}?client_encoding=utf8"
)

# 异步数据库连接 URL
async_database_url = (
    f"postgresql+asyncpg://{db_user}:{db_password}"
    f"@{db_host}:{db_port}/{db_name}"
)

# ============ JWT 配置 ============
jwt_secret = os.getenv("JWT_SECRET", "fallback_secret_key")
jwt_algorithm = os.getenv("JWT_ALGORITHM", "HS256")
jwt_expire_minutes = int(os.getenv("JWT_EXPIRE_MINUTES", "1440"))

# ============ 豆包模型配置 ============
doubao_api_key = os.getenv("DOUBAO_API_KEY", "")
doubao_base_url = os.getenv("DOUBAO_BASE_URL", "https://ark.cn-beijing.volces.com/api/v3")
doubao_model = os.getenv("DOUBAO_MODEL", "ep-20251223195501-9x6g5")
doubao_embedding_model = os.getenv("DOUBAO_EMBEDDING_MODEL", "")

# Cohere Rerank Configuration
cohere_api_key = os.getenv("COHERE_API_KEY", "")

# ============ Milvus 向量库配置 ============
milvus_host = os.getenv("MILVUS_HOST", "localhost")
milvus_port = os.getenv("MILVUS_PORT", "19530")
collection_name = "fitness_knowledge"

# ============ Redis 配置 ============
redis_host = os.getenv("REDIS_HOST", "localhost")
redis_port = int(os.getenv("REDIS_PORT", "6379"))
redis_db = int(os.getenv("REDIS_DB", "0"))
redis_password = os.getenv("REDIS_PASSWORD", None)

# ============ 文本分割器配置 ============
chunk_size = 500
chunk_overlap = 100
separators = ["\n---\n", "\n\n", "\n", "。", "，", " "]

# ============ 检索配置 ============
similarity_top_k = 3  # 检索返回的文档数量

# ============ 知识库路径 ============
knowledge_path = os.path.join(os.path.dirname(__file__), "..", "事例库.md")

# ============ Unstructured API 配置 ============
unstructured_api_key = os.getenv("UNSTRUCTURED_API_KEY", "")
unstructured_api_url = os.getenv("UNSTRUCTURED_API_URL", "https://api.unstructuredapp.io/general/v0/general")
