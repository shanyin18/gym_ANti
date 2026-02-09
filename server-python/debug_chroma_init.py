"""
调试脚本：追踪 embedding 调用
"""
import traceback
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
import config

# 首先测试 embedding
print("=== Testing Embedding ===")
from vector_store import DoubaoMultiModalEmbeddings

embedding = DoubaoMultiModalEmbeddings(
    api_key=config.doubao_api_key,
    model=config.doubao_embedding_model,
    base_url=config.doubao_base_url,
)

test_texts = ["测试文本1", "测试文本2"]
try:
    result = embedding.embed_documents(test_texts)
    print(f"Embedding result: {len(result)} vectors, first dim: {len(result[0]) if result else 'N/A'}")
except Exception as e:
    print(f"Embedding error:")
    traceback.print_exc()

# 然后测试 Chroma.from_documents
print("\n=== Testing Chroma.from_documents ===")
from langchain_core.documents import Document

docs = [Document(page_content=t) for t in test_texts]
try:
    vs = Chroma.from_documents(
        documents=docs,
        embedding=embedding,
        collection_name="test_collection",
        persist_directory="./test_chroma_db",
    )
    print(f"Chroma created successfully: {vs}")
except Exception as e:
    print(f"Chroma error:")
    traceback.print_exc()
