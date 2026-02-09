"""
Agent 服务模块 (Week 3 核心)
使用 ReAct / OpenAI Tools 模式，根据用户意图自主选择查询数据库或知识库。
"""
from typing import AsyncGenerator, Optional
from datetime import datetime

from langchain_openai import ChatOpenAI
from langchain.agents import AgentExecutor, create_tool_calling_agent
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.messages import AIMessage, HumanMessage
from langchain.memory import ConversationBufferMemory

from app.core import config
from app.services.tools import DietHistoryTool, KnowledgeBaseTool, CalorieCalculatorTool
from app.services.vector_store import VectorStoreService

# ============ Prompt 模板 ============

# System Prompt 重点在于定义角色和工具使用原则
SYSTEM_PROMPT = """你是一个专业的健身教练 AI "小鱼飞飞"。
你拥有三个强大的辅助工具：
1. `get_diet_history`: 查询用户个人的历史饮食和运动记录。
2. `search_knowledge_base`: 查询专业的健身/营养知识。
3. `calculate_food_calories`: 计算食物热量。

**工作原则**：
- 如果用户问"我昨天吃了什么" -> 调用 `get_diet_history`。
- 如果用户问"2个苹果多少热量" -> 调用 `calculate_food_calories`。
- 如果用户问"怎么减脂" -> 调用 `search_knowledge_base`。
- 综合问题请灵活组合工具。

当前时间: {current_time}
"""

class AgentService:
    def __init__(self):
        # 1. 初始化 VectorStoreService (为了兼容 main.py 的 API 接口)
        self.vector_service = VectorStoreService()

        # 2. 初始化工具集
        self.tools = [DietHistoryTool(), KnowledgeBaseTool(), CalorieCalculatorTool()]
        
        # 2. 初始化 LLM
        self.llm = ChatOpenAI(
            model=config.doubao_model,
            openai_api_key=config.doubao_api_key,
            openai_api_base=config.doubao_base_url,
            temperature=0.5, # 稍微降低温度以提高工具调用稳定性
        )
        
        # 3. 创建 Agent
        self.agent_executor = self._create_agent()

    def _create_agent(self) -> AgentExecutor:
        # 定义 Prompt，包含 chat_history 和 agent_scratchpad (中间思考过程)
        # 使用 partial 预填充 current_time，避免运行时传入导致 "One input key expected" 错误
        prompt = ChatPromptTemplate.from_messages([
            ("system", SYSTEM_PROMPT),
            MessagesPlaceholder(variable_name="chat_history"), # 历史对话
            ("human", "{input}"),
            MessagesPlaceholder(variable_name="agent_scratchpad"), # Agent 的思考/工具调用记录将填在这里
        ]).partial(current_time=datetime.now().strftime("%Y年%m月%d日 %H:%M"))
        
        # 2. 初始化 Memory
        memory = ConversationBufferMemory(
            memory_key="chat_history", 
            return_messages=True
        )

        # 使用官方推荐的各类 tool agent 构造器
        # create_tool_calling_agent 是目前最适合 OpenAI/Doubao Function Calling 的模式
        agent = create_tool_calling_agent(self.llm, self.tools, prompt)
        
        # 创建执行器
        return AgentExecutor(
            agent=agent, 
            tools=self.tools, 
            memory=memory, # 注入 Memory
            verbose=True, # 在控制台打印思考过程
            handle_parsing_errors=True, # 容错
            max_iterations=5, # 防止死循环
        )

    async def process_stream(self, message: str, history_logs: list, user_profile: Optional[dict]) -> AsyncGenerator[str, None]:
        """
        流式处理 (Agent 版本)
        注意：AgentExecutor 的 astream_events 比较复杂，这里简化使用 astream
        """
        current_time = datetime.now().strftime("%Y年%m月%d日 %H:%M")
        
        # 注意：current_time 已经在 _create_agent 阶段通过 partial() 预填充，无需运行时传入
        
        inputs = {
            "input": message,
            # "chat_history": [], # 由 Memory 自动管理
        }

        try:
            # AgentExecutor 的 astream 会输出中间步骤 (actions) 和最终结果 (output)
            # 我们只需要把最终结果 (output) 里的 token 流式吐给前端
            # 但 AgentExecutor 默认是对 Steps 流式，对 final answer ???
            # 
            # 简单起见，我们先用 ainvoke 获取完整结果，假装流式 (Week 3 Step 1)
            # 或者使用 .stream 获取 chunks，但 Agent 的 stream chunk 比较杂
            
            # 尝试迭代 stream 输出
            async for event in self.agent_executor.astream_events(inputs, version="v1"):
                kind = event["event"]
                
                # 1. 监测到工具被调用
                if kind == "on_tool_start":
                     # 可以选择产生一个 "正在查询数据库..." 的中间状态给前端 (可选)
                     # yield f"[系统: 正在调用 {event['name']}...]\n"
                     pass

                # 2. 监测到大模型生成的“最终回答”片段
                elif kind == "on_chat_model_stream":
                    content = event["data"]["chunk"].content
                    if content:
                        yield content
                        
        except Exception as e:
            yield f"Agent 运行出错: {str(e)}"

# ============ 全局单例 ============
_agent_service: Optional[AgentService] = None

def get_agent_service() -> AgentService:
    global _agent_service
    if _agent_service is None:
        _agent_service = AgentService()
    return _agent_service

def init_agent_service():
    global _agent_service
    _agent_service = AgentService()
    print("✅ AgentService initialized (Tool Calling Mode)")

# ============ 测试入口 ============
if __name__ == "__main__":
    import asyncio
    async def test():
        service = AgentService()
        
        print("\n=== 测试 1: 查知识库 ===")
        print("Q: 怎么减脂？")
        async for chunk in service.process_stream("怎么减脂？", [], None):
            print(chunk, end="", flush=True)
            
        print("\n\n=== 测试 2: 查数据库 (需要真实 DB 环境) ===")
        # print("Q: 我昨天吃了啥？")
        # async for chunk in service.process_stream("我昨天吃了啥？", [], None):
        #     print(chunk, end="", flush=True)

    asyncio.run(test())
