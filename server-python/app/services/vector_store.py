"""
向量库服务模块
封装 Chroma 向量库操作，参考黑马教程 vector_stores.py 风格
"""
import os
from typing import List, Any
import httpx
from langchain_chroma import Chroma
from langchain_core.embeddings import Embeddings
from langchain_core.documents import Document
from langchain_core.retrievers import BaseRetriever
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.retrievers import BM25Retriever
from langsmith import traceable
from app.core import config


# ============ 自定义混合检索器 (替代 EnsembleRetriever) ============
class HybridRetriever(BaseRetriever):
    """
    混合检索器：组合 BM25 和向量检索结果
    使用 RRF (Reciprocal Rank Fusion) 算法融合排名
    """
    retrievers: List
    weights: List[float]
    top_k: int = 5
    
    class Config:
        arbitrary_types_allowed = True
    
    @traceable(run_type="retriever", name="Hybrid_BM25_Vector")
    def _get_relevant_documents(self, query: str, **kwargs) -> List[Document]:
        """
        融合多个检索器的结果
        使用加权 RRF 算法：score = sum(weight_i / (rank_i + 60))
        """
        doc_scores = {}  # doc_id -> (doc, score)
        
        for retriever, weight in zip(self.retrievers, self.weights):
            try:
                docs = retriever.invoke(query)
                for rank, doc in enumerate(docs):
                    doc_id = doc.page_content[:100]  # 用内容前100字符作为 ID
                    rrf_score = weight / (rank + 60)  # RRF 公式，k=60 是常用值
                    
                    if doc_id in doc_scores:
                        doc_scores[doc_id] = (doc, doc_scores[doc_id][1] + rrf_score)
                    else:
                        doc_scores[doc_id] = (doc, rrf_score)
            except Exception as e:
                print(f"Retriever error: {e}")
                continue
        
        # 按分数排序，取 top_k
        sorted_docs = sorted(doc_scores.values(), key=lambda x: x[1], reverse=True)
        return [doc for doc, score in sorted_docs[:self.top_k]]


class RerankRetriever(BaseRetriever):
    """
    重排检索器：基础检索 + Cohere 重排
    替代 ContextualCompressionRetriever
    """
    base_retriever: BaseRetriever
    reranker: Any
    
    class Config:
        arbitrary_types_allowed = True
        
    @traceable(run_type="retriever", name="Cohere_Rerank")
    def _get_relevant_documents(self, query: str, **kwargs) -> List[Document]:
        # 1. 基础召回
        docs = self.base_retriever.invoke(query)
        if not docs:
            return []
            
        # 2. 调用 Cohere 重排
        try:
            compressed_docs = self.reranker.compress_documents(docs, query)
            return list(compressed_docs)
        except Exception as e:
            print(f"Rerank error: {e}")
            return docs[:5] # Fallback


# ============ 自定义豆包多模态 Embedding 类 ============
class DoubaoMultiModalEmbeddings(Embeddings):
    """
    豆包 Embedding Vision 模型适配器
    调用 /embeddings/multimodal 接口处理文本
    """
    
    def __init__(self, api_key: str, model: str, base_url: str = "https://ark.cn-beijing.volces.com/api/v3"):
        self.api_key = api_key
        self.model = model
        self.base_url = base_url.rstrip("/")
        self.endpoint = f"{self.base_url}/embeddings/multimodal"
    
    @traceable(run_type="embedding", name="Doubao_Embedding_API")
    def _call_api(self, texts: List[str]) -> List[List[float]]:
        """调用豆包 multimodal embedding API"""
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.api_key}"
        }
        
        # 构建 input 数组（每个文本一个对象）
        input_array = [{"type": "text", "text": t} for t in texts]
        
        payload = {
            "model": self.model,
            "input": input_array,
            "encoding_format": "float"
        }
        
        with httpx.Client(timeout=60.0) as client:
            response = client.post(self.endpoint, headers=headers, json=payload)
            response.raise_for_status()
            data = response.json()
        
        # 提取 embedding 向量
        # 注意：豆包 multimodal API 返回的 data 可能是 dict (单个结果) 或 list (多个结果)
        embeddings = []
        raw_data = data.get("data", [])
        
        # 如果是单个 dict，包装成 list
        if isinstance(raw_data, dict):
            raw_data = [raw_data]
        
        for item in raw_data:
            if isinstance(item, dict):
                # 尝试多种可能的 key
                vec = item.get("embedding") or item.get("embeddings") or []
                embeddings.append(vec)
        
        return embeddings
    
    @traceable(run_type="embedding", name="Doubao_Embed_Docs")
    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        """
        嵌入多个文档
        注意：豆包 multimodal API 每次只能处理一个输入，需要逐个调用
        """
        if not texts:
            return []
        
        embeddings = []
        for text in texts:
            result = self._call_api([text])
            if result:
                embeddings.append(result[0])
            else:
                embeddings.append([])  # fallback: 空向量
        return embeddings
    
    @traceable(run_type="embedding", name="Doubao_Embed_Query")
    def embed_query(self, text: str) -> List[float]:
        """嵌入单个查询"""
        result = self._call_api([text])
        return result[0] if result else []


class VectorStoreService(object):
    """向量库服务类"""
    
    def __init__(self):
        """初始化向量库服务"""
        # 确保存储目录存在
        os.makedirs(config.persist_directory, exist_ok=True)
        
        # 初始化嵌入模型（使用自定义豆包多模态适配器）
        self.embedding = DoubaoMultiModalEmbeddings(
            api_key=config.doubao_api_key,
            model=config.doubao_embedding_model,
            base_url=config.doubao_base_url,
        )
        
        # 初始化向量库
        self.vector_store = None
        self._docs_cache = []  # 缓存文档列表，供 BM25 使用
        self.__init_vector_store()
    
    def __init_vector_store(self):
        """初始化向量库，加载知识库文档"""
        try:
            # 检查知识库文件是否存在
            if not os.path.exists(config.knowledge_path):
                print(f"Warning: Knowledge file not found: {config.knowledge_path}")
                self.vector_store = Chroma(
                    collection_name=config.collection_name,
                    embedding_function=self.embedding,
                    persist_directory=config.persist_directory,
                )
                return
            
            # 读取知识库文档
            with open(config.knowledge_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # 文本分割
            splitter = RecursiveCharacterTextSplitter(
                chunk_size=config.chunk_size,
                chunk_overlap=config.chunk_overlap,
                separators=config.separators,
                length_function=len,
            )
            docs = splitter.create_documents([content])
            self._docs_cache = docs  # 缓存文档
            print(f"Document split into {len(docs)} chunks")
            
            # 创建向量库
            self.vector_store = Chroma.from_documents(
                documents=docs,
                embedding=self.embedding,
                collection_name=config.collection_name,
                persist_directory=config.persist_directory,
            )
            print(f"VectorStore initialized at {config.persist_directory}")
            
        except Exception as e:
            print(f"VectorStore init failed: {repr(e)}")
            self.vector_store = None
    
    def get_retriever(self):
        """返回向量检索器，方便加入 chain"""
        if self.vector_store is None:
            return None
        return self.vector_store.as_retriever(search_kwargs={"k": config.similarity_top_k})
    
    def get_hybrid_retriever(self, bm25_weight: float = 0.5):
        """
        返回 BM25 + 向量的混合检索器
        
        :param bm25_weight: BM25 检索器权重 (0-1)，向量检索器权重为 1 - bm25_weight
        :return: HybridRetriever 或 None
        """
        if self.vector_store is None:
            return None
        
        # 向量检索器
        vector_retriever = self.vector_store.as_retriever(
            search_kwargs={"k": config.similarity_top_k}
        )
        
        # 如果没有缓存文档，只返回向量检索器
        if not self._docs_cache:
            print("Warning: No docs cache for BM25, falling back to vector-only retrieval")
            return vector_retriever
        
        # BM25 检索器
        bm25_retriever = BM25Retriever.from_documents(
            self._docs_cache, 
            k=config.similarity_top_k
        )
        
        # 自定义混合检索器
        hybrid_retriever = HybridRetriever(
            retrievers=[bm25_retriever, vector_retriever],
            weights=[bm25_weight, 1 - bm25_weight],
            top_k=config.similarity_top_k
        )
        
        print(f"Hybrid retriever created: BM25={bm25_weight}, Vector={1-bm25_weight}")
        return hybrid_retriever
    
    def get_rerank_retriever(self, top_k: int = 5):
        """
        返回 Rerank 重排检索器 (Cohere)
        流程：Hybrid Retrieve (Top 20) -> Rerank -> Top 5
        """
        if not config.cohere_api_key:
            print("Warning: COHERE_API_KEY not found, falling back to hybrid retriever")
            return self.get_hybrid_retriever()
        
        # 1. 基础检索器 (召回更多文档，例如 20 条)
        base_retriever = self.get_hybrid_retriever()
        # 强制修改 hybrid retriever 的 top_k 为 20，以便召回更多
        base_retriever.top_k = 20
        
        # 2. 压缩器 (Cohere Rerank) - 懒加载避免 import 时网络阻塞
        from langchain_cohere import CohereRerank
        compressor = CohereRerank(
            cohere_api_key=config.cohere_api_key,
            model="rerank-multilingual-v3.0",
            top_n=top_k
        )
        
        # 3. 组合 (使用自定义 RerankRetriever)
        rerank_wrapper = RerankRetriever(
            base_retriever=base_retriever,
            reranker=compressor
        )
        
        print(f"Rerank retriever created: Hybrid(Top20) -> Cohere(Top{top_k})")
        return rerank_wrapper

    def add_document(self, content: str, title: str = "") -> str:
        """
        添加单条资料到向量库
        
        :param content: 资料内容
        :param title: 资料标题
        :return: 文档 ID
        """
        from datetime import datetime
        from langchain_core.documents import Document
        import uuid
        
        doc_id = str(uuid.uuid4())[:8]
        metadata = {
            "doc_id": doc_id,
            "title": title,
            "created_at": datetime.now().isoformat(),
            "source": "user_upload",
        }
        
        doc = Document(page_content=content, metadata=metadata)
        
        if self.vector_store is None:
            self.vector_store = Chroma(
                collection_name=config.collection_name,
                embedding_function=self.embedding,
                persist_directory=config.persist_directory,
            )
        
        self.vector_store.add_documents([doc], ids=[doc_id])
        print(f"Added document: {doc_id} - {title}")
        return doc_id
    
    def get_all_documents(self) -> list:
        """
        获取所有用户上传的资料列表
        
        :return: [{"doc_id": ..., "title": ..., "content": ..., "created_at": ...}, ...]
        """
        if self.vector_store is None:
            return []
        
        try:
            # 获取底层 collection
            collection = self.vector_store._collection
            result = collection.get(include=["documents", "metadatas"])
            
            docs = []
            for i, doc_id in enumerate(result["ids"]):
                metadata = result["metadatas"][i] if result["metadatas"] and result["metadatas"][i] else {}
                # 只返回用户上传的资料
                if metadata.get("source") == "user_upload":
                    docs.append({
                        "doc_id": doc_id,
                        "title": metadata.get("title", ""),
                        "content": result["documents"][i] if result["documents"] else "",
                        "created_at": metadata.get("created_at", ""),
                    })
            
            # 按创建时间倒序
            docs.sort(key=lambda x: x["created_at"], reverse=True)
            return docs
            
        except Exception as e:
            print(f"Get documents error: {repr(e)}")
            return []
    
    def delete_document(self, doc_id: str) -> bool:
        """
        删除指定资料
        
        :param doc_id: 文档 ID
        :return: 是否删除成功
        """
        if self.vector_store is None:
            return False
        
        try:
            self.vector_store.delete(ids=[doc_id])
            print(f"Deleted document: {doc_id}")
            return True
        except Exception as e:
            print(f"Delete document error: {repr(e)}")
            return False
