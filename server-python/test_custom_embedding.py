"""
测试自定义 DoubaoMultiModalEmbeddings 类
"""
import sys
sys.path.insert(0, '.')

from vector_store import DoubaoMultiModalEmbeddings
import config

print("="*50)
print("Testing DoubaoMultiModalEmbeddings")
print("="*50)
print(f"API Key: {config.doubao_api_key[:10]}...")
print(f"Model: {config.doubao_embedding_model}")
print(f"Base URL: {config.doubao_base_url}")
print()

try:
    embeddings = DoubaoMultiModalEmbeddings(
        api_key=config.doubao_api_key,
        model=config.doubao_embedding_model,
        base_url=config.doubao_base_url,
    )
    
    test_text = "减脂期间应该控制碳水化合物摄入"
    print(f"Test text: {test_text}")
    print("Calling API...")
    
    result = embeddings.embed_query(test_text)
    
    print(f"✅ SUCCESS! Vector length: {len(result)}")
    print(f"First 5 values: {result[:5]}")
    
except Exception as e:
    print(f"❌ FAILED: {e}")
