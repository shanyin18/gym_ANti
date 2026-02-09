"""
调试脚本：直接打印 API 完整响应
"""
import httpx
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("DOUBAO_API_KEY")
model = os.getenv("DOUBAO_EMBEDDING_MODEL")
base_url = os.getenv("DOUBAO_BASE_URL", "https://ark.cn-beijing.volces.com/api/v3")
endpoint = f"{base_url}/embeddings/multimodal"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
}

payload = {
    "model": model,
    "input": [{"type": "text", "text": "测试文本"}],
    "encoding_format": "float"
}

print(f"Calling: {endpoint}")
print(f"Model: {model}")

try:
    with httpx.Client(timeout=60.0) as client:
        response = client.post(endpoint, headers=headers, json=payload)
        response.raise_for_status()
        data = response.json()
    
    print("\n=== FULL RESPONSE ===")
    import json
    print(json.dumps(data, indent=2, ensure_ascii=False))
    
    print("\n=== DATA STRUCTURE ===")
    print(f"Type of 'data': {type(data.get('data'))}")
    if data.get('data'):
        print(f"First item type: {type(data['data'][0])}")
        if isinstance(data['data'][0], dict):
            print(f"First item keys: {data['data'][0].keys()}")
        
except Exception as e:
    print(f"Error: {e}")
