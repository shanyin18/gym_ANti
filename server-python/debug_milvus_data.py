import config
from pymilvus import connections, Collection, utility

def debug_milvus():
    print(f"Connecting to Milvus at {config.milvus_host}:{config.milvus_port}...")
    connections.connect(alias="default", host=config.milvus_host, port=config.milvus_port)
    
    collection_name = config.collection_name
    if not utility.has_collection(collection_name):
        print(f"Collection {collection_name} does not exist.")
        return

    collection = Collection(collection_name)
    print(f"Collection loaded: {collection_name}")
    collection.load()
    
    # 1. 查询所有数据的 source 和 doc_id
    print("\n--- Current Data ---")
    results = collection.query(
        expr="id >= 0",  # 查询所有
        output_fields=["doc_id", "source", "title"],
        limit=100
    )
    
    print(f"Total items found: {len(results)}")
    for res in results:
        print(f"[{res['doc_id']}] source='{res['source']}' title='{res['title']}'")

    if not results:
        return

    # 2. 尝试删除所有
    print("\n--- Attempting Delete All ---")
    try:
        # 尝试使用更宽泛的条件
        # collection.delete(expr='source in ["user_upload", "pdf_chunk"]')
        # 或者更暴力的：id >= 0
        
        # 先按原来的逻辑删
        collection.delete(expr='source == "user_upload"')
        collection.delete(expr='source == "pdf_chunk"')
        collection.flush()
        print("Delete command executed and flushed.")
        
        # 再查一次
        collection.load() # 重新 load
        results_after = collection.query(
            expr="id >= 0",
            output_fields=["doc_id"],
            limit=100
        )
        print(f"Items after delete: {len(results_after)}")
        
    except Exception as e:
        print(f"Error deleting: {e}")

if __name__ == "__main__":
    debug_milvus()
