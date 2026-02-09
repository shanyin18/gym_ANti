"""
配置管理模块
集中管理所有配置项
"""
import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv(override=True)

# 项目根目录 (server-python/)
PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent

# ============ 数据库配置 ============
db_host = os.getenv("DB_HOST", "localhost")
db_user = os.getenv("DB_USER", "postgres")
db_password = os.getenv("DB_PASSWORD", "")
db_name = os.getenv("DB_NAME", "gym_anti")
db_port = os.getenv("DB_PORT", "5432")

# 完整的数据库连接 URL
database_url = (
    f"postgresql+psycopg2://{db_user}:{db_password}"
    f"@{db_host}:{db_port}/{db_name}?client_encoding=utf8"
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

# ============ Chroma 向量库配置 ============
collection_name = "fitness_knowledge"
# 使用 PROJECT_ROOT 定位 chroma_db
persist_directory = os.path.join(PROJECT_ROOT, "chroma_db")

# ============ 文本分割器配置 ============
chunk_size = 500
chunk_overlap = 100
separators = ["\n---\n", "\n\n", "\n", "。", "，", " "]

# ============ 检索配置 ============
similarity_top_k = 3  # 检索返回的文档数量

# ============ 知识库路径 ============
# 使用 PROJECT_ROOT 定位 事例库.md (假设它在 server-python 的上一级? 原代码是 .., "事例库.md")
# 原代码 config.py 在 server-python/config.py. .. is server-python/.. = Desktop/gym_ANti/
# PROJECT_ROOT is server-python/
# So PROJECT_ROOT.parent / "事例库.md"
knowledge_path = os.path.join(PROJECT_ROOT.parent, "事例库.md")
