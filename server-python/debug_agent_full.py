import asyncio
import os
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage
from app.services.agent_service import AgentService

async def test_agent():
    print("🚀 初始化 Agent 服务...")
    try:
        service = AgentService()
    except Exception as e:
        print(f"❌ 初始化失败: {e}")
        return

    # 定义测试用例
    test_cases = [
        {
            "case": "知识库查询 (RAG)",
            "query": "新手怎么开始健身？",
            "expected_tool": "search_knowledge_base"
        },
        {
            "case": "数据库查询 (DB)",
            "query": "帮忙查一下 user_123 昨天的饮食记录",
            "expected_tool": "get_diet_history"
        },
        {
            "case": "混合查询 (Advanced)",
            "query": "user_123 昨天吃的蛋白质够不够增肌？（需要先查记录，再查知识库标准）",
            "expected_tool": "BOTH"
        }
    ]

    for i, test in enumerate(test_cases):
        print(f"\n{'='*20} Test {i+1}: {test['case']} {'='*20}")
        print(f"❓ 问题: {test['query']}")
        print(f"🎯 预期: {test['expected_tool']}")
        print("-" * 30)
        
        print("🤖 Agent 回复流:")
        try:
            async for chunk in service.process_stream(test['query'], [], None):
                print(chunk, end="", flush=True)
            print("\n")
        except Exception as e:
            print(f"\n❌ 执行出错: {e}")

if __name__ == "__main__":
    # 确保在项目根目录运行，以便能读取 .env
    asyncio.run(test_agent())
