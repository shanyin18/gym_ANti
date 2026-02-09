# Agent 错误处理实现报告 (Week 3)

## 1. 背景与目标
根据 Week 3 学习路线图的要求，我们需要为 Agent 系统增加错误处理机制。
**核心目标**：
1.  **网络/服务抖动容错**：当数据库或向量检索服务暂时不可用时，自动重试，避免一次失败即报错。
2.  **防止死循环**：限制 Agent 的最大思考/执行步骤，防止在遇到无法自动修复的错误时无限调用工具。

## 2. 实现逻辑

### 2.1 引入 Tenacity 重试库
我们选择了 python 社区广泛使用的 `tenacity` 库来实现装饰器风格的重试逻辑。
- **策略**: `stop_after_attempt(3)` (最多重试3次)
- **间隔**: `wait_fixed` (固定等待时间，降低后端压力)

### 2.2 优雅降级
虽然 tenacity 会抛出 `RetryError`，但我们在 AgentExecutor 层面启用了 `handle_parsing_errors=True`，并建议后续进一步优化 `handle_tool_error`，确保最终返回给用户的是可读的错误提醒，而不是堆栈跟踪。

### 2.3 最大迭代限制
在 `AgentService` 初始化 `AgentExecutor` 时，显式传入 `max_iterations=5`，确保 Agent 不会消耗过多的 Token 或陷入死循环。

## 3. 代码变更对比

### 3.1 依赖更新 (`requirements.txt`)

```diff
ragas                 # RAG 评估框架
datasets              # HuggingFace datasets (RAGAs 依赖)
unstructured-client   # Unstructured API 客户端 (PDF解析)
+ tenacity              # 重试机制
```

### 3.2 工具层 (`app/services/tools.py`)

**变更前**:
```python
class DietHistoryTool(BaseTool):
    def _run(self, username: str, limit: int = 5) -> str:
        try:
            logs = get_history_logs(username, limit=limit)
            # ...
        except Exception as e:
            return f"查询数据库失败: {str(e)}"
```

**变更后**:
```python
+ from tenacity import retry, stop_after_attempt, wait_fixed

class DietHistoryTool(BaseTool):
+   @retry(stop=stop_after_attempt(3), wait=wait_fixed(0.5))
    def _run(self, username: str, limit: int = 5) -> str:
        """同步执行工具操作 (带重试)"""
        try:
            logs = get_history_logs(username, limit=limit)
            # ...
        except Exception as e:
+           # 抛出异常以触发重试
+           raise e 
```

### 3.3 Agent 服务 (`app/services/agent_service.py`)

**变更前**:
```python
return AgentExecutor(
    agent=agent, 
    tools=self.tools, 
    memory=memory,
    verbose=True, 
    handle_parsing_errors=True
)
```

**变更后**:
```python
return AgentExecutor(
    agent=agent, 
    tools=self.tools, 
    memory=memory,
    verbose=True, 
    handle_parsing_errors=True,
+   max_iterations=5, # 防止死循环
)
```

## 4. 验证结果
我们编写了 `verify_retry.py` 脚本，模拟数据库连接失败 (`Mock Exception`)。
**测试结果**:
- 工具正确执行了 3 次重试。
- 重试间隔符合预期。
- 最终能正确处理失败情况。
