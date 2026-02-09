# Agent Memory 实现文档

本文档详细记录了在 `server-python` 应用中通过集成 LangChain `ConversationBufferMemory` 模块为 AI Agent 增加对话记忆能力的过程。

## 1. 核心目标
解决 Agent 无法记住上下文的问题（即每一轮对话都是全新的，无法基于之前的对话内容进行回复）。通过引入 Memory 组件，使 Agent 能够自动管理对话历史。

## 2. 实现逻辑
LangChain 的 Agent 架构本身支持 Memory 注入，关键步骤如下：
1.  **Memory 组件**: 使用 `ConversationBufferMemory` 在内存中存储对话历史（生产环境通常会配合 Redis 等持久化存储，但在该阶段先使用内存版）。
2.  **Prompt 占位符**: 在 `PromptTemplate` 中预留 `chat_history` 变量位置，用于动态插入历史记录。
3.  **AgentExecutor 注入**: 将 Memory 实例传递给 Agent 执行器，使其在执行这一轮任务前自动读取历史，执行完任务后自动更新历史。

## 3. 代码变更对比

### 3.1 `agent_service.py` 修改

**1. 导入依赖**
```diff
+ from langchain.memory import ConversationBufferMemory
```

**2. 初始化 Memory 并注入 AgentExecutor**
这是最核心的改动。我们在 `_create_agent` 方法中初始化了 Memory 对象，并将其绑定到 Agent 和 Prompt 上。

**Before (修改前):**
```python
def _create_agent(self) -> AgentExecutor:
    # 简单的 Prompt，虽然有占位符但没有对应的 Memory 填充逻辑
    prompt = ChatPromptTemplate.from_messages([
        ("system", SYSTEM_PROMPT),
        MessagesPlaceholder(variable_name="chat_history"),
        ("human", "{input}"),
        MessagesPlaceholder(variable_name="agent_scratchpad"),
    ])
    
    agent = create_tool_calling_agent(self.llm, self.tools, prompt)
    
    return AgentExecutor(
        agent=agent, 
        tools=self.tools, 
        verbose=True, # 没有 memory 参数
        handle_parsing_errors=True
    )
```

**After (修改后):**
```python
def _create_agent(self) -> AgentExecutor:
    prompt = ChatPromptTemplate.from_messages([
        ("system", SYSTEM_PROMPT),
        MessagesPlaceholder(variable_name="chat_history"), # 对应 Memory 的 memory_key
        ("human", "{input}"),
        MessagesPlaceholder(variable_name="agent_scratchpad"),
    ])
    
    # [NEW] 初始化 ConversationBufferMemory
    memory = ConversationBufferMemory(
        memory_key="chat_history", # 必须与 Prompt 中的变量名一致
        return_messages=True       # 因为使用 ChatModel，必须设为 True
    )

    agent = create_tool_calling_agent(self.llm, self.tools, prompt)
    
    return AgentExecutor(
        agent=agent, 
        tools=self.tools, 
        memory=memory, # [NEW] 注入 Memory 实例
        verbose=True,
        handle_parsing_errors=True
    )
```

**3. 调用逻辑简化**
因为 AgentExecutor 内部接管了 `chat_history` 的填充，调用时不再需要手动传递空的 `chat_history` 列表。

**Before:**
```python
inputs = {
    "input": message,
    "chat_history": [], # 需要手动传递，且为空
    "current_time": current_time
}
```

**After:**
```python
inputs = {
    "input": message,
    # "chat_history": [], # 这一行被删除/注释，由 Memory 自动接管
    "current_time": current_time
}
```

### 3.2 `main.py` 迁移

为了让应用生效，还需要将主程序调用的服务从无状态的 `RagService` 切换为带 Memory 的 `AgentService`。

```python
# Before
# from rag_service import init_rag_service, get_rag_service

# After
from app.services.agent_service import init_agent_service, get_agent_service

# 调用处修改
# rag_service = get_rag_service() 
agent_service = get_agent_service() 
```

## 4. 验证效果
- **连续对话能力**: 现在用户第一句说 "我是程序员"，第二句问 "我是做什么的？"，Agent 能够根据 Context 准确回答 "你是程序员"。
- **工具调用保持**: Memory 的加入不影响正常的 `search_knowledge_base` 或 `get_diet_history` 等工具调用。

## 5. 遗留/下一步
- 目前 Memory 存储在服务器内存中，重启服务不仅会重置 Memory，而且多用户并发（如果是 load balanced 环境）会有问题。
- 下一步建议升级为 `RedisChatMessageHistory` 或持久化数据库存储，实现真正的多轮长程记忆。
