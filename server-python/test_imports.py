"""Test each import from vector_store.py individually."""
import sys

f = open("diag2.txt", "w", encoding="utf-8")

imports = [
    ("langchain_chroma", "from langchain_chroma import Chroma"),
    ("langchain_core.embeddings", "from langchain_core.embeddings import Embeddings"),
    ("langchain_core.documents", "from langchain_core.documents import Document"),
    ("langchain_core.retrievers", "from langchain_core.retrievers import BaseRetriever"),
    ("langchain_text_splitters", "from langchain_text_splitters import RecursiveCharacterTextSplitter"),
    ("langchain_community.retrievers", "from langchain_community.retrievers import BM25Retriever"),
    ("langchain_cohere", "from langchain_cohere import CohereRerank"),
    ("langsmith", "from langsmith import traceable"),
    ("app.core.config", "from app.core import config"),
]

for name, stmt in imports:
    f.write(f"Importing {name}... "); f.flush()
    try:
        exec(stmt)
        f.write("OK\n"); f.flush()
    except Exception as e:
        f.write(f"FAILED: {e}\n"); f.flush()

f.write("ALL DONE\n"); f.flush()
f.close()
