import asyncio
import time
import sys
import os
from unittest.mock import MagicMock, patch

# Add server-python to path
sys.path.append(os.path.join(os.path.dirname(__file__)))

import config
from cache_manager import cache_manager
# from vector_store import VectorStoreService  <-- remove direct import to avoid init connect
from vector_store import DoubaoMultiModalEmbeddings
from rag_service import RagService

async def test_redis_connection():
    print("\n[1] Testing Redis Connection...")
    if cache_manager.is_connected:
        print("✅ Redis is connected.")
        cache_manager.set("test_key", "hello_redis")
        val = cache_manager.get("test_key")
        if val == "hello_redis":
            print("✅ Redis set/get working.")
        else:
            print(f"❌ Redis get failed: expected 'hello_redis', got {val}")
    else:
        print("❌ Redis is NOT connected.")

async def test_embedding_cache():
    print("\n[2] Testing Embedding Cache...")
    # Instantiate Embedding directly
    embedding = DoubaoMultiModalEmbeddings(
        api_key=config.doubao_api_key,
        model=config.doubao_embedding_model,
        base_url=config.doubao_base_url,
    )
    text = "测试Embedding缓存性能"
    
    # 清除旧缓存
    key = cache_manager.generate_key("embedding", text)
    if cache_manager.redis_client:
        cache_manager.redis_client.delete(key)
    
    print("  First call (Uncached)...")
    start = time.time()
    vec1 = embedding.embed_query(text)
    duration1 = time.time() - start
    print(f"  Ref time: {duration1:.4f}s")
    
    print("  Second call (Cached)...")
    start = time.time()
    vec2 = embedding.embed_query(text)
    duration2 = time.time() - start
    print(f"  Ref time: {duration2:.4f}s")
    
    if duration2 < duration1 * 0.5: # Expect at least 2x speedup (actually much more)
        print(f"✅ Cache works! Speedup: {duration1/duration2:.2f}x")
    elif duration2 < 0.01:
        print(f"✅ Cache works! (Values cached)")
    else:
        print("⚠️ Cache might not be working or API is too fast.")

async def test_llm_cache():
    print("\n[3] Testing LLM Response Cache...")
    
    # Mock VectorStoreService to avoid Milvus connection
    with patch('rag_service.VectorStoreService') as MockVS:
        mock_vs_instance = MockVS.return_value
        # Mock retriever
        mock_retriever = MagicMock()
        mock_retriever.invoke.return_value = [] # Return empty docs
        mock_vs_instance.get_rerank_retriever.return_value = mock_retriever
        
        # Initialize RagService with mocked dependencies
        rag = RagService()
        
        # Mock inputs
        msg = "你好，我是测试员"
        profile = {"age": 25, "gender": "male"}
        
        # We need to manually clear cache for this specific input to test uncached
        # But we don't know the exact key easily without replicating logic. 
        # We can just trust that first run sets it.
        
        print("  First call (Uncached)...")
        start = time.time()
        res1 = ""
        # Mock get_current_time to ensure consistent key for second run
        with patch('rag_service.get_current_time', return_value="2024年01月01日 12:00"):
            async for chunk in rag.process_stream(msg, [], profile):
                res1 += chunk
        duration1 = time.time() - start
        print(f"  Response 1: {res1[:20]}...")
        print(f"  Time: {duration1:.4f}s")
        
        print("  Second call (Attempting Cache)...")
        
        start = time.time()
        res2 = ""
        # Use SAME time
        with patch('rag_service.get_current_time', return_value="2024年01月01日 12:00"):
            async for chunk in rag.process_stream(msg, [], profile):
                res2 += chunk
        duration2 = time.time() - start
        print(f"  Response 2: {res2[:20]}...")
        print(f"  Time: {duration2:.4f}s")

        if duration2 < 0.1 and duration1 > 0.5:
             print(f"✅ Cache Hit! Speedup: {duration1/duration2:.2f}x")
        elif res1 == res2:
             print(f"✅ Responses match. Timings: {duration1:.2f}s vs {duration2:.2f}s")
        else:
             print("❌ Responses differ.")

if __name__ == "__main__":
    asyncio.run(test_redis_connection())
    asyncio.run(test_embedding_cache())
    asyncio.run(test_llm_cache())
