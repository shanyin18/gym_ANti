# Cohere Rerank (重排) 实现技术报告

本报告记录了在 `gym_ANti` 项目中引入 **Cohere Rerank** 模型以实现 **“粗排 + 精排”** 两阶段检索的详细过程、实现逻辑及代码对比。

---

## 1. 核心逻辑：两阶段检索 (Two-Stage Retrieval)

引入 Rerank 后，我们从单一的检索模式升级为了工业界标准的 **“漏斗型”** 检索流程：

### 流程对比
*   **传统模式 (Hybrid Only)**:
    > 用户提问 -> [BM25 + 向量] 并行召回 -> 简单融合排名 -> **直接取前 5 条**
    > *问题：召回的 Top 5 可能包含“这山望着那山高”的伪相关文档。*

*   **Rerank 模式 (Current)**:
    > 用户提问 -> [BM25 + 向量] 并行召回 -> **放宽范围取前 20 条 (Recall)** -> **Cohere 模型逐一打分 (Rerank)** -> **精选得分最高的前 5 条**
    > *优势：利用大模型强大的语义理解能力，把排在第 15 名但真正正确的文档“捞”上来。*

---

## 2. 关键代码实现

由于 LangChain 现有环境组件缺失，我们采用了 **自定义 Wrapper** 的方式封装 Cohere 能力。

### 2.1 引入 Cohere SDK (vector_store.py)

#### [NEW] 自定义重排检索器类
为了解决环境兼容性问题并增加容错能力，我们实现了一个轻量级的包装类：

```python
class RerankRetriever(BaseRetriever):
    """
    逻辑：先调用 base_retriever 召回，再调用 reranker 重排
    """
    def _get_relevant_documents(self, query: str):
        # 1. 第一阶段：基础召回 (Recall)
        docs = self.base_retriever.invoke(query)
        
        # 2. 第二阶段：重排 (Rerank)
        try:
            # 调用 Cohere API 对 docs 进行重新打分排序
            compressed_docs = self.reranker.compress_documents(docs, query)
            return list(compressed_docs)
        except Exception:
            # 容错降级：如果 API 挂了，直接返回原顺序的前 5 条
            return docs[:5] 
```

### 2.2 组装逻辑 (vector_store.py)

#### [NEW] get_rerank_retriever 方法
```python
def get_rerank_retriever(self, top_k: int = 5):
    # 1. 准备基础检索器（扩大召回窗口到 20 条）
    base_retriever = self.get_hybrid_retriever()
    base_retriever.top_k = 20  # 关键点！扩大候选池
    
    # 2. 初始化 Cohere 模型
    compressor = CohereRerank(
        cohere_api_key=config.cohere_api_key,
        model="rerank-multilingual-v3.0", # 业界最强多语言重排模型之一
        top_n=top_k  # 最终只取 Top 5
    )
    
    # 3. 组合两者
    return RerankRetriever(
        base_retriever=base_retriever,
        reranker=compressor
    )
```

---

## 3. 业务层无感升级 (rag_service.py)

得益于良好的封装，业务层只需改动一行代码即可享受 Rerank 带来的效果提升。

#### 代码 Diff 对比
```python
# rag_service.py process_stream 方法中

# --- 修改前 (Hybrid 1.0) ---
# retriever = self.vector_service.get_hybrid_retriever()

# --- 修改后 (Rerank 2.0) ---
# 获取经过 Rerank 增强的检索器
retriever = self.vector_service.get_rerank_retriever()

if retriever is not None:
    docs = retriever.invoke(message)
```

---

## 4. 效果提升示例

假设用户问：*"苹果"* (意指水果)

| 阶段 | 候选文档 | 排名依据 | 结果 |
| :--- | :--- | :--- | :--- |
| **混合召回 (Top 20)** | 1. 苹果手机使用指南<br>2. 苹果营养成分表<br>3. 乔布斯传... | 关键词匹配度<br>向量相似度 | 混杂了电子产品和水果，且手机指南排第一 (因为词频高) |
| **Rerank 重排** | **1. 苹果营养成分表** (Score: 0.98)<br>2. 水果摊报价表 (Score: 0.85)<br>3. 苹果手机使用指南 (Score: 0.01) | **语义相关性** | 模型识别出“营养”、“吃”等语境，将真正相关的文档**置顶** |

---

## 5. 总结
通过引入 Cohere Rerank，我们不仅提升了检索的**准确率 (Precision)**，还极大增强了系统对**长尾问题**和**歧义查询**的处理能力，是 RAG 系统迈向生产可用的关键一步。
