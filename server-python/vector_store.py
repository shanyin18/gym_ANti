"""
向量库服务模块
封装 Milvus 向量库操作，参考黑马教程 vector_stores.py 风格
"""
import os
from typing import List, Any, Optional
import httpx
from pymilvus import (
    connections,
    Collection,
    CollectionSchema,
    FieldSchema,
    DataType,
    utility,
)
from langchain_core.embeddings import Embeddings
from langchain_core.documents import Document
from langchain_core.retrievers import BaseRetriever
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.retrievers import BM25Retriever
from langchain_cohere import CohereRerank
import config


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


# ============ Milvus 向量检索器 ============
class MilvusRetriever(BaseRetriever):
    """Milvus 向量检索器，实现 LangChain BaseRetriever 接口"""
    collection: Any
    embedding: Any
    top_k: int = 3
    
    class Config:
        arbitrary_types_allowed = True
    
    def _get_relevant_documents(self, query: str, **kwargs) -> List[Document]:
        # 1. 生成查询向量
        query_vector = self.embedding.embed_query(query)
        if not query_vector:
            return []
        
        # 2. Milvus 搜索
        search_params = {"metric_type": "L2", "params": {"nprobe": 10}}
        self.collection.load()
        
        results = self.collection.search(
            data=[query_vector],
            anns_field="embedding",
            param=search_params,
            limit=self.top_k,
            output_fields=["content", "title", "doc_id", "source", "created_at"]
        )
        
        # 3. 转换为 LangChain Document
        docs = []
        for hits in results:
            for hit in hits:
                entity = hit.entity
                doc = Document(
                    page_content=entity.get("content", ""),
                    metadata={
                        "doc_id": entity.get("doc_id", ""),
                        "title": entity.get("title", ""),
                        "source": entity.get("source", ""),
                        "created_at": entity.get("created_at", ""),
                        "distance": hit.distance,
                    }
                )
                docs.append(doc)
        
        return docs


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
        self._dim = None  # 缓存向量维度
    
    def _call_api(self, texts: List[str]) -> List[List[float]]:
        """调用豆包 multimodal embedding API (带 Redis 缓存)"""
        from cache_manager import cache_manager
        
        embeddings = []
        uncached_texts = []
        uncached_indices = []
        
        # 1. 检查缓存
        for i, text in enumerate(texts):
            cache_key = cache_manager.generate_key("embedding", text)
            cached_val = cache_manager.get(cache_key)
            if cached_val:
                try:
                    embeddings.append(json.loads(cached_val))
                except:
                    embeddings.append(None)
            else:
                embeddings.append(None)
                uncached_texts.append(text)
                uncached_indices.append(i)
        
        if not uncached_texts:
            return embeddings

        # 2. 调用 API 处理未命中项
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.api_key}"
        }
        
        # 构建 input 数组（每个文本一个对象）
        input_array = [{"type": "text", "text": t} for t in uncached_texts]
        
        payload = {
            "model": self.model,
            "input": input_array,
            "encoding_format": "float"
        }
        
        try:
            with httpx.Client(timeout=60.0) as client:
                response = client.post(self.endpoint, headers=headers, json=payload)
                response.raise_for_status()
                data = response.json()
            
            raw_data = data.get("data", [])
            if isinstance(raw_data, dict):
                raw_data = [raw_data]
                
            # 3. 填充结果并写入缓存
            for j, item in enumerate(raw_data):
                vec = item.get("embedding") or item.get("embeddings") or []
                original_index = uncached_indices[j]
                embeddings[original_index] = vec
                
                # 写入缓存 (7天过期)
                if vec:
                    if self._dim is None:
                        self._dim = len(vec)
                    cache_key = cache_manager.generate_key("embedding", uncached_texts[j])
                    cache_manager.set(cache_key, json.dumps(vec), ttl=604800)
                    
        except Exception as e:
            print(f"Embedding API error: {e}")
            # 如果请求失败，那些 None 的只能保持 None 或抛出异常
            # 这里简单处理，保持部分成功
            pass
        
        # 过滤掉可能的 None (如果有失败)
        return [e for e in embeddings if e is not None]
    
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
    
    def embed_query(self, text: str) -> List[float]:
        """嵌入单个查询"""
        result = self._call_api([text])
        return result[0] if result else []
    
    def get_dimension(self) -> int:
        """获取向量维度（首次调用时会触发一次 API 请求）"""
        if self._dim is None:
            # 用一个简单文本触发维度检测
            self.embed_query("test")
        return self._dim or 1024  # fallback


class VectorStoreService(object):
    """向量库服务类 - Milvus 版本"""
    
    def __init__(self):
        """初始化向量库服务"""
        # 连接 Milvus
        connections.connect(
            alias="default",
            host=config.milvus_host,
            port=config.milvus_port
        )
        print(f"✅ Connected to Milvus at {config.milvus_host}:{config.milvus_port}")
        
        # 初始化嵌入模型
        self.embedding = DoubaoMultiModalEmbeddings(
            api_key=config.doubao_api_key,
            model=config.doubao_embedding_model,
            base_url=config.doubao_base_url,
        )
        
        # 初始化向量库
        self.collection: Optional[Collection] = None
        self._docs_cache = []  # 缓存文档列表，供 BM25 使用
        self.__init_vector_store()
    
    def __init_vector_store(self):
        """初始化向量库，加载知识库文档"""
        try:
            collection_name = config.collection_name
            
            # 检查 Collection 是否已存在
            if utility.has_collection(collection_name):
                self.collection = Collection(collection_name)
                print(f"✅ Loaded existing collection: {collection_name}")
                # 加载已有文档到缓存（供 BM25 使用）
                self._load_docs_cache()
                return
            
            # 获取向量维度
            dim = self.embedding.get_dimension()
            print(f"Embedding dimension: {dim}")
            
            # 定义 Schema
            fields = [
                FieldSchema(name="id", dtype=DataType.INT64, is_primary=True, auto_id=True),
                FieldSchema(name="doc_id", dtype=DataType.VARCHAR, max_length=64),
                FieldSchema(name="content", dtype=DataType.VARCHAR, max_length=65535),
                FieldSchema(name="title", dtype=DataType.VARCHAR, max_length=512),
                FieldSchema(name="source", dtype=DataType.VARCHAR, max_length=64),
                FieldSchema(name="created_at", dtype=DataType.VARCHAR, max_length=64),
                FieldSchema(name="embedding", dtype=DataType.FLOAT_VECTOR, dim=dim),
            ]
            schema = CollectionSchema(fields, "健身知识库向量集合")
            self.collection = Collection(collection_name, schema)
            
            # 创建索引
            index_params = {
                "index_type": "IVF_FLAT",
                "metric_type": "L2",
                "params": {"nlist": 128},
            }
            self.collection.create_index("embedding", index_params)
            print(f"✅ Created new collection: {collection_name}")
            
            # 导入知识库文档
            self._import_knowledge_base()
            
        except Exception as e:
            print(f"VectorStore init failed: {repr(e)}")
            self.collection = None
    
    def _import_knowledge_base(self):
        """导入知识库文档"""
        if not os.path.exists(config.knowledge_path):
            print(f"Warning: Knowledge file not found: {config.knowledge_path}")
            return
        
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
        self._docs_cache = docs
        print(f"Document split into {len(docs)} chunks")
        
        # 批量插入
        from datetime import datetime
        import uuid
        
        doc_ids = []
        contents = []
        titles = []
        sources = []
        created_ats = []
        embeddings = []
        
        for doc in docs:
            doc_id = str(uuid.uuid4())[:8]
            doc_ids.append(doc_id)
            contents.append(doc.page_content[:65000])  # 限制长度
            titles.append("知识库")
            sources.append("knowledge_base")
            created_ats.append(datetime.now().isoformat())
            embeddings.append(self.embedding.embed_query(doc.page_content))
        
        data = [doc_ids, contents, titles, sources, created_ats, embeddings]
        self.collection.insert(data)
        self.collection.flush()
        print(f"✅ Imported {len(docs)} documents to Milvus")
    
    def _load_docs_cache(self):
        """从 Milvus 加载文档到缓存（供 BM25 使用）"""
        try:
            self.collection.load()
            results = self.collection.query(
                expr="source != ''",
                output_fields=["content"],
                limit=10000
            )
            self._docs_cache = [
                Document(page_content=r["content"])
                for r in results if r.get("content")
            ]
            print(f"Loaded {len(self._docs_cache)} docs to cache for BM25")
        except Exception as e:
            print(f"Load docs cache error: {e}")
            self._docs_cache = []
    
    def get_retriever(self):
        """返回向量检索器，方便加入 chain"""
        if self.collection is None:
            return None
        return MilvusRetriever(
            collection=self.collection,
            embedding=self.embedding,
            top_k=config.similarity_top_k
        )
    
    def get_hybrid_retriever(self, bm25_weight: float = 0.5):
        """
        返回 BM25 + 向量的混合检索器
        
        :param bm25_weight: BM25 检索器权重 (0-1)，向量检索器权重为 1 - bm25_weight
        :return: HybridRetriever 或 None
        """
        if self.collection is None:
            return None
        
        # 向量检索器
        vector_retriever = MilvusRetriever(
            collection=self.collection,
            embedding=self.embedding,
            top_k=config.similarity_top_k
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
        base_retriever.top_k = 20
        
        # 2. 压缩器 (Cohere Rerank)
        compressor = CohereRerank(
            cohere_api_key=config.cohere_api_key,
            model="rerank-multilingual-v3.0",
            top_n=top_k
        )
        
        # 3. 组合
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
        import uuid
        
        if self.collection is None:
            raise RuntimeError("Milvus collection not initialized")
        
        doc_id = str(uuid.uuid4())[:8]
        embedding = self.embedding.embed_query(content)
        
        data = [
            [doc_id],
            [content[:65000]],
            [title],
            ["user_upload"],
            [datetime.now().isoformat()],
            [embedding]
        ]
        
        self.collection.insert(data)
        self.collection.flush()
        
        # 更新缓存
        self._docs_cache.append(Document(page_content=content))
        
        print(f"Added document: {doc_id} - {title}")
        return doc_id
    
    def add_pdf_document(self, filename: str, chunks: list, chunk_count: int) -> str:
        """
        添加 PDF 文档到向量库
        
        - 创建一个主记录 (source=user_upload) 用于前端显示
        - 创建多个切分块记录 (source=pdf_chunk) 用于向量检索
        
        :param filename: PDF 文件名
        :param chunks: 切分后的文本块列表
        :param chunk_count: 切分块数量
        :return: PDF 主记录的 doc_id
        """
        from datetime import datetime
        import uuid
        
        if self.collection is None:
            raise RuntimeError("Milvus collection not initialized")
        
        # 生成 PDF 主记录 ID
        pdf_id = str(uuid.uuid4())[:8]
        now = datetime.now().isoformat()
        
        # 1. 添加主记录 (用于前端显示)
        summary = f"PDF 文件，包含 {chunk_count} 个文本块"
        main_embedding = self.embedding.embed_query(summary)
        main_data = [
            [pdf_id],
            [summary],
            [f"📄 {filename}"],
            ["user_upload"],  # 主记录用 user_upload，会显示在前端
            [now],
            [main_embedding]
        ]
        self.collection.insert(main_data)
        
        # 2. 添加切分块记录 (用于向量检索，不显示在前端)
        for i, chunk_text in enumerate(chunks):
            if not chunk_text.strip():
                continue
            chunk_id = f"{pdf_id}_{i}"
            chunk_embedding = self.embedding.embed_query(chunk_text)
            chunk_data = [
                [chunk_id],
                [chunk_text[:65000]],
                [f"{filename} (块 {i+1})"],
                ["pdf_chunk"],  # 切分块用 pdf_chunk，不会显示在前端
                [now],
                [chunk_embedding]
            ]
            self.collection.insert(chunk_data)
            self._docs_cache.append(Document(page_content=chunk_text))
        
        self.collection.flush()
        print(f"Added PDF: {pdf_id} - {filename} ({chunk_count} chunks)")
        return pdf_id
    
    def get_all_documents(self) -> list:
        """
        获取所有用户上传的资料列表
        
        :return: [{"doc_id": ..., "title": ..., "content": ..., "created_at": ...}, ...]
        """
        if self.collection is None:
            return []
        
        try:
            self.collection.load()
            results = self.collection.query(
                expr='source == "user_upload"',
                output_fields=["doc_id", "title", "content", "created_at"],
                limit=1000
            )
            
            docs = [
                {
                    "doc_id": r.get("doc_id", ""),
                    "title": r.get("title", ""),
                    "content": r.get("content", ""),
                    "created_at": r.get("created_at", ""),
                }
                for r in results
            ]
            
            # 按创建时间倒序
            docs.sort(key=lambda x: x["created_at"], reverse=True)
            return docs
            
        except Exception as e:
            print(f"Get documents error: {repr(e)}")
            return []
    
    def delete_document(self, doc_id: str) -> bool:
        """
        删除指定资料
        
        - 先查询出该 doc_id (及 PDF 切分块) 对应的内部主键 ID
        - 再通过主键 ID 删除
        """
        if self.collection is None:
            print(f"Delete document: collection is None")
            return False
        
        try:
            self.collection.load()
            
            # 1. 查询要删除的主键 ID
            # 注意：doc_id 可能是普通文档，也可能是 PDF 的主记录
            # 我们要查 doc_id 本身，以及 doc_id_ 开头的切分块
            expr = f'doc_id == "{doc_id}" or doc_id like "{doc_id}_%"'
            
            res = self.collection.query(
                expr=expr,
                output_fields=["id"]
            )
            
            if not res:
                print(f"Document {doc_id} not found, consider deleted.")
                return True
                
            ids = [item['id'] for item in res]
            print(f"Found {len(ids)} items to delete for doc_id {doc_id}")
            
            # 2. 通过主键删除
            self.collection.delete(expr=f"id in {ids}")
            self.collection.flush()
            
            print(f"Deleted document: {doc_id} (deleted {len(ids)} entries)")
            return True
        except Exception as e:
            print(f"Delete document error: {repr(e)}")
            return False
    
    def delete_all_user_documents(self) -> int:
        """
        删除所有用户上传的资料 (批量删除)
        """
        if self.collection is None:
            print("Delete all: collection is None")
            return 0
        
        try:
            self.collection.load()
            
            # 1. 查询所有用户文档的主键 ID
            res = self.collection.query(
                expr='source == "user_upload" or source == "pdf_chunk"', 
                output_fields=["id"],
                limit=16384 # 假设不会超过这么多，分批删更好，但这里简化
            )
            
            if not res:
                print("No user documents found to delete.")
                return 0
            
            ids = [item['id'] for item in res]
            count = len(ids)
            print(f"Found {count} items to delete.")
            
            # 2. 通过主键删除
            self.collection.delete(expr=f"id in {ids}")
            self.collection.flush()
            
            # 清空缓存中的用户文档
            self._docs_cache = [doc for doc in self._docs_cache if doc.metadata.get("source") != "user_upload"]
            
            print(f"Deleted {count} user documents successfully")
            return count
        except Exception as e:
            print(f"Delete all error: {repr(e)}")
            return 0
    
    def delete_documents(self, doc_ids: list[str]) -> int:
        """
        批量删除指定文档 (支持 PDF 级联删除)
        """
        if self.collection is None or not doc_ids:
            return 0
        
        try:
            self.collection.load()
            
            # 构建查询表达式：doc_id 在列表中，或者 doc_id 以前缀匹配列表中的某项
            # Milvus 表达式不支持复杂的前缀 OR，所以我们最好分别查询
            # 为了简单起见，且避免超长表达式，我们可以分批处理
            
            # 策略：先找出所有相关的主键 ID
            # 1. 精确匹配的 doc_id
            expr_exact = f'doc_id in {list(doc_ids)}' # doc_ids 应该是字符串列表
            
            # 2. PDF 切分块 (前缀匹配)
            # Milvus 不支持 `doc_id like "a%" or doc_id like "b%"` 这样的列表前缀
            # 我们简化处理：只对精确匹配的 ID 进行查找。
            # 如果是 PDF，doc_id 就是文件名，user_upload 记录是这个 ID
            # 但 PDF 切分块的 ID 是 {doc_id}_{index}
            # 所以我们需要查所有以这些 ID 开头的块
            
            # 由于 Milvus 限制，我们可以先查 user_upload 确定哪些是 PDF
            # 但更稳妥的是直接对每个要删的 ID 查一次关联块，或者接受只能删主记录（如果不显示块的话问题不大，但那是脏数据）
            
            # 改进策略：
            # 先一次性查出 doc_ids 对应的主记录 IDs
            res = self.collection.query(
                expr=f'doc_id in {str(doc_ids)}',
                output_fields=["id", "doc_id"],
                limit=10000
            )
            
            ids_to_delete = {item['id'] for item in res} # 使用集合去重
            
            # 针对每个 doc_id，如果是 PDF（或者不知道是不是），尝试查找其切分块
            # 由于无法在一个 expr 里写 N 个 like，我们只能循环查找（如果 doc_ids 很多，这会很慢）
            # 或者，假设前端传入的 doc_ids 都是 user_upload 记录
            
            # 优化：只对那些 doc_id 确实存在的进行 chunk 查找
            for doc_id in doc_ids:
                 # 查找切分块 (注意：这会增加 N 次查询，如果选中很多会慢。但在本地 Milvus 应该还行)
                 chunk_res = self.collection.query(
                     expr=f'doc_id like "{doc_id}_%"',
                     output_fields=["id"],
                     limit=1000 # 假设一个 PDF 不超过 1000 页
                 )
                 for item in chunk_res:
                     ids_to_delete.add(item['id'])
            
            if not ids_to_delete:
                return 0
                
            final_ids = list(ids_to_delete)
            print(f"Batch delete: deleting {len(final_ids)} items for {len(doc_ids)} documents.")
            
            self.collection.delete(expr=f"id in {final_ids}")
            self.collection.flush()
            
            return len(final_ids)
            
        except Exception as e:
            print(f"Batch delete error: {repr(e)}")
            return 0


if __name__ == '__main__':
    # 测试代码
    service = VectorStoreService()
    retriever = service.get_retriever()
    if retriever:
        res = retriever.invoke("减脂期间怎么吃？")
        print(res)
    else:
        print("Retriever not available")
