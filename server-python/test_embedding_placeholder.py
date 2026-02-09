
import os
import sys
from dotenv import load_dotenv
from langchain_community.embeddings import VolcEngineEmbeddings

# Load env
load_dotenv(".env")

api_key = os.getenv("DOUBAO_API_KEY")
model = os.getenv("DOUBAO_EMBEDDING_MODEL")
base_url = os.getenv("DOUBAO_BASE_URL")

print(f"Testing Embedding...")
print(f"API Key: {api_key[:5]}...")
print(f"Model: {model}")
print(f"Base URL: {base_url}")

try:
    embeddings = VolcEngineEmbeddings(
        volc_engine_maas_ak=api_key,
        volc_engine_maas_sk=api_key, # VolcEngine wrapper might use different params, but let's try standard
        volc_engine_maas_host="ark.cn-beijing.volces.com",
    )
    # The user helper code usually sets environment variables or uses specific wrapper.
    # Let's verify how rag_service.py does it.
    
    # Actually, let's look at rag_service.py first to copy the EXACT instantiation logic.
    pass
except Exception as e:
    print(f"Init Error: {e}")

