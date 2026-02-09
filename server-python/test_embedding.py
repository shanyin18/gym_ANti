
import os
import sys
from dotenv import load_dotenv
from langchain_openai import OpenAIEmbeddings

# Load env from current directory
load_dotenv(".env")

api_key = os.getenv("DOUBAO_API_KEY")
base_url = os.getenv("DOUBAO_BASE_URL")
embedding_model = os.getenv("DOUBAO_EMBEDDING_MODEL")

print(f"Testing Embedding via OpenAIEmbeddings...")
print(f"API Key: {api_key[:5]}..." if api_key else "None")
print(f"Base URL: {base_url}")
print(f"Model: {embedding_model}")

try:
    embedding = OpenAIEmbeddings(
        model=embedding_model,
        openai_api_key=api_key,
        openai_api_base=base_url,
        check_embedding_ctx_length=False # Avoid immediate checking if possible
    )
    print("Embedding object initialized.")
    
    # Test embedding query
    print("Attempting to embed query 'test'...")
    res = embedding.embed_query("test")
    print(f"Success! Vector length: {len(res)}")
    
except Exception as e:
    print(f"ERROR: {e}")
except KeyboardInterrupt:
    print("\nInterrupted by user (Timeout)")
