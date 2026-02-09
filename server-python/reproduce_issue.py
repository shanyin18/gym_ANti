
import os
from langchain_openai import OpenAIEmbeddings
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("DOUBAO_API_KEY")
base_url = os.getenv("DOUBAO_BASE_URL", "https://ark.cn-beijing.volces.com/api/v3")
model = os.getenv("DOUBAO_EMBEDDING_MODEL") # Keep this line as it's used later
modbase_url = os.getenv("DOUBAO_BASE_URL") # Add this new line

print(f"ENV DUMP:")
for k, v in os.environ.items():
    if "DOUBAO" in k:
        print(f"{k}={v}")

print(f"Testing Embedding...") # Corrected the syntax error here, assuming "with:" was a typo or partial instruction.
print(f"Base URL: {base_url}")
print(f"Model: {model}")

embeddings = OpenAIEmbeddings(
    model=model,
    openai_api_key=api_key,
    openai_api_base=base_url,
    check_embedding_ctx_length=False # Try to disable local tokenization checks
)

try:
    text = "测试文本"
    print(f"\nEmbedding text: {text}")
    res = embeddings.embed_query(text)
    print(f"Success! Vector length: {len(res)}")
except Exception as e:
    print(f"\nError: {e}")
