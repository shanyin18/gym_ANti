"""
Batching 功能测试脚本
验证 AsyncBatchProcessor 和批量 Embedding 是否正常工作
"""
import asyncio
import time
from unittest.mock import patch, MagicMock

# ============ 测试 AsyncBatchProcessor ============

async def test_async_batch_processor():
    """测试异步批处理器"""
    from batch_utils import AsyncBatchProcessor
    
    call_count = 0
    received_batches = []
    
    def mock_process_fn(items):
        """模拟批量处理函数"""
        nonlocal call_count
        call_count += 1
        received_batches.append(items)
        print(f"  [Mock API] Batch #{call_count}: {len(items)} items")
        # 返回每个 item 的处理结果
        return [f"result_{item}" for item in items]
    
    processor = AsyncBatchProcessor(
        process_fn=mock_process_fn,
        max_batch_size=10,
        linger_ms=100
    )
    
    # 模拟高并发：同时发起 25 个请求
    print("\n=== 测试 AsyncBatchProcessor ===")
    print("发起 25 个并发请求...")
    
    start = time.time()
    tasks = [processor.process(f"query_{i}") for i in range(25)]
    results = await asyncio.gather(*tasks)
    elapsed = time.time() - start
    
    print(f"\n结果:")
    print(f"  - 请求数: 25")
    print(f"  - API 调用次数: {call_count}")
    print(f"  - 批次大小: {[len(b) for b in received_batches]}")
    print(f"  - 耗时: {elapsed:.2f}s")
    print(f"  - 预期: 3 次调用 (10 + 10 + 5)")
    
    assert call_count <= 3, f"期望最多 3 次批量调用，实际 {call_count} 次"
    assert len(results) == 25, f"期望 25 个结果，实际 {len(results)} 个"
    print("✅ AsyncBatchProcessor 测试通过!")
    return True


# ============ 测试 Embedding 批量处理 ============

async def test_embedding_batching():
    """测试 Embedding 批量处理"""
    print("\n=== 测试 Embedding 批量处理 ===")
    
    # Mock cache_manager
    mock_cache = MagicMock()
    mock_cache.generate_key = lambda prefix, text: f"{prefix}:{hash(text)}"
    mock_cache.get = lambda key: None  # 模拟缓存未命中
    mock_cache.set = lambda key, val, ttl: None
    
    api_call_count = 0
    
    def mock_post(url, headers, json):
        """模拟 API 请求"""
        nonlocal api_call_count
        api_call_count += 1
        items = json.get("input", [])
        print(f"  [Mock API] Call #{api_call_count}: {len(items)} items")
        
        # 模拟返回 embedding
        mock_response = MagicMock()
        mock_response.raise_for_status = lambda: None
        mock_response.json = lambda: {
            "data": [{"embedding": [0.1] * 1024} for _ in items]
        }
        return mock_response
    
    mock_client = MagicMock()
    mock_client.__enter__ = lambda s: mock_client
    mock_client.__exit__ = lambda s, *args: None
    mock_client.post = mock_post
    
    with patch.dict("sys.modules", {"cache_manager": MagicMock(cache_manager=mock_cache)}):
        import importlib
        import vector_store
        # 直接 mock 模块级别的 cache_manager
        vector_store.cache_manager = mock_cache
        
        with patch("httpx.Client", return_value=mock_client):
            from vector_store import DoubaoMultiModalEmbeddings
            
            embedding = DoubaoMultiModalEmbeddings(
                api_key="test_key",
                model="test_model"
            )
            
            # 测试 embed_documents 批量处理
            print("调用 embed_documents (25 个文本)...")
            texts = [f"文档内容 {i}" for i in range(25)]
            
            api_call_count = 0  # 重置计数
            results = embedding.embed_documents(texts)
            
            print(f"\n结果:")
            print(f"  - 文本数: 25")
            print(f"  - API 调用次数: {api_call_count}")
            print(f"  - 返回向量数: {len(results)}")
            print(f"  - 预期: 3 次调用 (batch_size=10)")
            
            assert api_call_count == 3, f"期望 3 次 API 调用，实际 {api_call_count} 次"
            assert len(results) == 25, f"期望 25 个向量，实际 {len(results)} 个"
            print("✅ Embedding 批量处理测试通过!")
            return True


# ============ 主入口 ============

async def main():
    print("=" * 50)
    print("Batching 功能测试")
    print("=" * 50)
    
    try:
        await test_async_batch_processor()
        await test_embedding_batching()
        print("\n" + "=" * 50)
        print("✅ 所有测试通过!")
        print("=" * 50)
    except Exception as e:
        print(f"\n❌ 测试失败: {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    asyncio.run(main())
