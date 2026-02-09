try:
    from langchain.agents import AgentExecutor
    print("✅ from langchain.agents import AgentExecutor")
except Exception as e:
    print(f"❌ from langchain.agents import AgentExecutor: {e}")

try:
    from langchain.agents import create_tool_calling_agent
    print("✅ from langchain.agents import create_tool_calling_agent")
except Exception as e:
    print(f"❌ from langchain.agents import create_tool_calling_agent: {e}")

try:
    from langchain.agents.agent import AgentExecutor
    print("✅ from langchain.agents.agent import AgentExecutor")
except Exception as e:
    print(f"❌ from langchain.agents.agent import AgentExecutor: {e}")
