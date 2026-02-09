import asyncio
from app.services.agent_service import AgentService

async def test_calculator():
    print("🚀 初始化 Agent 服务 (Calculator Mode)...")
    try:
        service = AgentService()
    except Exception as e:
        print(f"❌ 初始化失败: {e}")
        return

    # 测试用例
    queries = [
        "2个苹果多少热量？",
        "一碗米饭和3个鸡蛋的热量是多少？",
        "我刚才吃了500g鸡胸肉，帮我算算卡路里",
        "一杯牛奶加一个香蕉"
    ]

    for q in queries:
        print(f"\n❓ 问题: {q}")
        print("-" * 30)
        try:
            async for chunk in service.process_stream(q, [], None):
                print(chunk, end="", flush=True)
            print("\n")
        except Exception as e:
            print(f"❌ 执行出错: {e}")

if __name__ == "__main__":
    asyncio.run(test_calculator())
