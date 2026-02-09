"""
调试脚本：获取完整的错误追踪
"""
import traceback

try:
    from vector_store import VectorStoreService
    
    print("Creating VectorStoreService...")
    s = VectorStoreService()
    
    print(f"\nDocs cache: {len(s._docs_cache)}")
    print(f"Vector store: {s.vector_store}")
    
    if s.vector_store:
        print("\nTesting vector retriever...")
        ret = s.get_retriever()
        if ret:
            docs = ret.invoke("减脂")
            print(f"Vector docs: {len(docs)}")
        
        print("\nTesting hybrid retriever...")
        hybrid = s.get_hybrid_retriever()
        if hybrid:
            docs = hybrid.invoke("减脂")
            print(f"Hybrid docs: {len(docs)}")
        else:
            print("Hybrid retriever is None")
    else:
        print("Vector store is None")
        
except Exception as e:
    print(f"\n=== FULL TRACEBACK ===")
    traceback.print_exc()
