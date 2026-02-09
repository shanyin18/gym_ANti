"""
测试 BM25 + 向量混合检索
"""
import sys
sys.path.insert(0, '.')

from vector_store import VectorStoreService

print("="*60)
print("Testing Hybrid Retrieval (BM25 + Vector)")
print("="*60)

try:
    # 初始化服务
    service = VectorStoreService()
    
    # 测试查询
    test_query = "减脂期间怎么吃？"
    print(f"\nQuery: {test_query}\n")
    
    # 1. 纯向量检索
    print("--- Vector-only Retrieval ---")
    vector_retriever = service.get_retriever()
    if vector_retriever:
        vector_docs = vector_retriever.invoke(test_query)
        for i, doc in enumerate(vector_docs):
            print(f"[{i+1}] {doc.page_content[:100]}...")
    else:
        print("Vector retriever not available")
    
    # 2. 混合检索
    print("\n--- Hybrid Retrieval (BM25 + Vector) ---")
    hybrid_retriever = service.get_hybrid_retriever()
    if hybrid_retriever:
        hybrid_docs = hybrid_retriever.invoke(test_query)
        for i, doc in enumerate(hybrid_docs):
            print(f"[{i+1}] {doc.page_content[:100]}...")
    else:
        print("Hybrid retriever not available")

    # 3. Rerank 重排
    print("\n--- Cohere Rerank Retrieval ---")
    rerank_retriever = service.get_rerank_retriever()
    if rerank_retriever:
        rerank_docs = rerank_retriever.invoke(test_query)
        for i, doc in enumerate(rerank_docs):
            print(f"[{i+1}] {doc.page_content[:100]}...")
    else:
        print("Rerank retriever not available")
    
    print("\n✅ SUCCESS: Rerank retrieval is working!")
    
except Exception as e:
    print(f"\n❌ FAILED: {e}")
    import traceback
    traceback.print_exc()
