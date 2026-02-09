# Week 3 实战记录：从 RAG 进化到 Agent

本文档记录了我们将后端核心服务从单纯的 **RAG Service (Week 1-2)** 升级为具备自主决策能力的 **Agent Service (Week 3)** 的完整过程。

## 1. 核心逻辑变革

### Before: 线性流水线 (RAG)
旧的 `RagService` 像是一个固定的流水线工人。无论用户问什么，它都严格执行相同的步骤：
1.  **检索**: 去向量库搜几篇文档。
2.  **生成**: 把文档和问题丢给大模型。
3.  **回答**: 大模型根据文档回答。

**局限性**:
*   如果用户问“我昨天吃了啥？”，流水线依然去搜“健身知识库”，结果搜不到，导致回答质量差。
*   无法根据不同的问题类型调用不同的数据源。

### After: 智能决策循环 (Agent)
新的 `AgentService` 像是一个项目经理。它手握工具箱，面对问题时会先**思考**，再**行动**。
1.  **思考 (Reasoning)**: 用户问的是个人数据还是通用知识？
2.  **决策 (Decision)**: 决定调用哪个工具（查库 vs 查文档）。
3.  **执行 (Action)**: 运行工具代码。
4.  **观察 (Observation)**: 拿到结果，整合回答。

---

## 2. 工具封装 (Tools Implementation)

Agent 的能力取决于它手中的工具。我们将原本散落在各处的逻辑封装成了两个标准的 LangChain 工具。

### 工具 1: 饮食历史查询 (`DietHistoryTool`)
这是 Week 3 的新增能力，让 AI 能“看见”数据库。

```python
# app/services/tools.py

class DietHistoryTool(BaseTool):
    name: str = "get_diet_history"
    description: str = "查询用户最近的饮食和运动历史记录。..."
    
    def _run(self, username: str, limit: int = 5) -> str:
        # 封装了原本的 CRUD 操作
        logs = get_history_logs(username, limit=limit)
        return format_logs_to_text(logs)
```

### 工具 2: 知识库检索 (`KnowledgeBaseTool`)
这是将 Week 1-2 的 RAG 能力封装成了一个工具。**注意它是“按需调用”的**。

```python
# app/services/tools.py

class KnowledgeBaseTool(BaseTool):
    name: str = "search_knowledge_base"
    description: str = "查询健身专业知识库。当用户询问通用健身问题时使用..."
    
    def _run(self, query: str) -> str:
        # 封装了原本 RagService 的检索逻辑
        docs = vector_service.get_rerank_retriever().invoke(query)
        return format_docs(docs)
```

---

## 3. 服务升级 (Service Migration)

我们创建了全新的 `AgentService` 来替代 `RagService`。

### 代码对比：初始化与驱动

**Before (`rag_service.py`):**
使用 LCEL (LangChain Expression Language) 构建固定链。

```python
class RagService:
    def __init__(self):
        # 只有 RAG 检索器
        self.retriever = VectorStoreService().get_retriever()
        
    def _build_chain(self):
        # 固定流程: 检索 -> Prompt -> LLM
        return (
            {"context": self.retriever, "question": RunnablePassthrough()}
            | prompt
            | self.llm
        )
```

**After (`agent_service.py`):**
使用 `AgentExecutor` 构建决策循环。

```python
class AgentService:
    def __init__(self):
        # 1. 准备工具箱 (同时拥有 数据库 和 知识库 能力)
        self.tools = [DietHistoryTool(), KnowledgeBaseTool()]
        
        # 2. 绑定工具 (Bind Tools)
        # 这一步是告诉大模型：你有这些能力
        self.agent = create_tool_calling_agent(self.llm, self.tools, prompt)
        
        # 3. 创建执行器 (Executor)
        # 这是一个 Runtime，负责 "思考-调用-执行-再思考" 的循环
        self.agent_executor = AgentExecutor(agent=self.agent, tools=self.tools)

    async def process_stream(self, message, ...):
        # 不再运行 chain，而是运行 agent_executor
        async for chunk in self.agent_executor.astream_events(...):
            yield chunk
```

---

## 4. 路由层变更 (Main & API)

最后，我们在 API 层完成了“狸猫换太子”，让系统接管 Agent。

### `app/main.py`
```diff
- from app.services.rag_service import init_rag_service
+ from app.services.agent_service import init_agent_service

  async def lifespan(app: FastAPI):
-     init_rag_service()  # 旧引擎
+     init_agent_service() # 新引擎
```

### `app/api/v1/endpoints/chat.py`
```diff
@router.post("/chat/stream")
async def chat_stream(...):
-   rag_service = get_rag_service()
-   async for chunk in rag_service.process_stream(...)
+   agent_service = get_agent_service()
+   async for chunk in agent_service.process_stream(...)
```

---

## 5. 最终效果展示

**场景 1：用户问“我昨天吃了什么？”**
*   **Old RAG**: 去搜文档，搜不到，回答“根据知识库我不知道”。
*   **New Agent**: 识别意图 -> 调用 `DietHistoryTool` -> 查库 -> 回答“昨天你吃了3个鸡蛋”。

**场景 2：用户问“怎么减脂？”**
*   **Old RAG**: 搜文档 -> 回答。
*   **New Agent**: 识别意图 -> 调用 `KnowledgeBaseTool` -> 搜文档 -> 回答。

**场景 3：用户问“结合我的饮食记录给点减脂建议”**
*   **Old RAG**: (无法处理)
*   **New Agent**: 
    1. 调用 `DietHistoryTool` 查记录。
    2. 调用 `KnowledgeBaseTool` 查建议。
    3. 综合两者回答。

---
>用于记录 Week 3 学习成果
