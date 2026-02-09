import os
import asyncio
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage
from app.services.tools import DietHistoryTool
from app.core import config

# 1. 准备工具
tool = DietHistoryTool()
tools = [tool]

# 2. 准备大模型
llm = ChatOpenAI(
    model=config.doubao_model,
    openai_api_key=config.doubao_api_key,
    openai_api_base=config.doubao_base_url,
    temperature=0
)

# 3. 绑定工具 (这步很关键！这就相当于告诉模型：你有这些技能包)
llm_with_tools = llm.bind_tools(tools)

async def test_trigger(question: str):
    print(f"\n======== 用户提问: '{question}' ========")
    
    # 第一次调用：模型思考
    print("🤖 AI 正在思考...")
    messages = [HumanMessage(content=question)]
    ai_msg = await llm_with_tools.ainvoke(messages)
    
    # 检查模型是否决定调用工具
    if ai_msg.tool_calls:
        print(f"🎯 触发工具调用! 模型决定使用: {ai_msg.tool_calls[0]['name']}")
        print(f"📦 参数内容: {ai_msg.tool_calls[0]['args']}")
        
        # 模拟执行工具
        tool_call = ai_msg.tool_calls[0]
        tool_result = tool.invoke(tool_call['args'])
        print(f"✅ 工具执行结果: {tool_result}")
        
    else:
        print("🗣️ 模型决定直接回答 (未触发工具)")
        print(f"AI 回复: {ai_msg.content}")

if __name__ == "__main__":
    # 模拟两个场景
    asyncio.run(test_trigger("你好，你是谁？"))
    asyncio.run(test_trigger("帮我查查 user_123 昨天吃了什么？"))
