"""
Agent 服务模块 (Week 3 核心)
使用 ReAct / OpenAI Tools 模式，根据用户意图自主选择查询数据库或知识库。
"""
from typing import AsyncGenerator, Optional
from datetime import datetime
from threading import Lock

from langchain_openai import ChatOpenAI
from langchain.agents import AgentExecutor, create_tool_calling_agent
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain.memory import ConversationBufferMemory

import config
from tools import DietHistoryTool, KnowledgeBaseTool, CalorieCalculatorTool
from vector_store import VectorStoreService


SYSTEM_PROMPT = """你是一个专业的健身教练 AI "小鱼飞飞"。
你拥有三个强大的辅助工具：
1. `get_diet_history`: 查询用户个人的历史饮食和运动记录。
2. `search_knowledge_base`: 查询专业的健身/营养知识。
3. `calculate_food_calories`: 计算食物热量。

**工作原则**：
- **热量查询优先**：凡是问"多少热量"、"卡路里"的，**必须且只能**调用 `calculate_food_calories`，严禁查询知识库。
- **饮食记录优先**：凡是说"我吃了..."、"早饭是..."等陈述句，默认意图为**记录饮食**，请调用 `get_diet_history` (或未来实现的记录工具)，或者计算其热量。**禁止**将其理解为询问"好处"或"功效"。
- 知识问答：只有明确问"怎么做"、"有什么好处"、"科学依据"时，才调用 `search_knowledge_base`。
- 综合问题请灵活组合工具。

**重要规则**：
- **禁止重复**：如果工具返回了有效数值（如找到了热量），请直接回答用户，**绝不要**再次调用同一个工具。
- **失败重试**：只有当工具报错或不适用时，才尝试其他工具。
- **知识库兜底**：如果 `search_knowledge_base` 返回“无相关参考资料”或类似内容，**立即停止搜索**，直接用你自己的通用知识回答用户的问题。**禁止**为了同一个问题反复修改关键词尝试搜索。

当前时间: {current_time}
"""


class AgentService:
    def __init__(self):
        self.vector_service = VectorStoreService()
        self.tools = [DietHistoryTool(), KnowledgeBaseTool(), CalorieCalculatorTool()]
        self.llm = ChatOpenAI(
            model=config.doubao_model,
            openai_api_key=config.doubao_api_key,
            openai_api_base=config.doubao_base_url,
            temperature=0.5,
        )
        self.agent_executor = self._create_agent()

    def _create_agent(self) -> AgentExecutor:
        prompt = ChatPromptTemplate.from_messages([
            ("system", SYSTEM_PROMPT),
            MessagesPlaceholder(variable_name="chat_history"),
            ("human", "{input}"),
            MessagesPlaceholder(variable_name="agent_scratchpad"),
        ]).partial(current_time=datetime.now().strftime("%Y年%m月%d日 %H:%M"))

        memory = ConversationBufferMemory(
            memory_key="chat_history",
            return_messages=True,
            input_key="input",
        )

        agent = create_tool_calling_agent(self.llm, self.tools, prompt)

        return AgentExecutor(
            agent=agent,
            tools=self.tools,
            memory=memory,
            verbose=True,
            handle_parsing_errors=True,
            max_iterations=5,
        )

    async def process_stream(self, message: str, history_logs: list, user_profile: Optional[dict]) -> AsyncGenerator[str, None]:
        user_info_str = ""
        if user_profile:
            u = user_profile
            user_info_str = f"[当前用户: {u.get('username', 'Unknown')}, 年龄: {u.get('age', 'N/A')}, 目标: {u.get('goal', 'N/A')}]\n"

        inputs = {
            "input": f"{user_info_str}{message}",
        }

        try:
            async for event in self.agent_executor.astream_events(inputs, version="v1"):
                kind = event["event"]

                if kind == "on_chat_model_stream":
                    content = event["data"]["chunk"].content
                    if content:
                        yield content
                elif kind == "on_chain_end" and event["name"] == "AgentExecutor":
                    output = event["data"].get("output")
                    final_text = ""
                    if isinstance(output, dict):
                        final_text = output.get("output", "")
                    elif isinstance(output, str):
                        final_text = output

                    if final_text and "计算结果" in str(final_text):
                        yield f"{final_text}"
        except Exception as e:
            yield f"Agent 运行出错: {str(e)}"


_agent_service: Optional[AgentService] = None
_agent_service_lock = Lock()


def get_agent_service() -> AgentService:
    global _agent_service
    if _agent_service is not None:
        return _agent_service

    with _agent_service_lock:
        if _agent_service is None:
            _agent_service = AgentService()
    return _agent_service


def init_agent_service(force: bool = False) -> AgentService:
    global _agent_service
    with _agent_service_lock:
        if _agent_service is not None and not force:
            return _agent_service
        _agent_service = AgentService()
        print("✅ AgentService initialized (Tool Calling Mode)")
        return _agent_service
