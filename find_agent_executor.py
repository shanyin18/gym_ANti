import langchain
print(f"LangChain Version: {langchain.__version__}")

try:
    from langchain.agents import AgentExecutor
    print("✅ Found in langchain.agents")
except ImportError as e:
    print(f"❌ Not in langchain.agents: {e}")

try:
    from langchain.agents.agent import AgentExecutor
    print("✅ Found in langchain.agents.agent")
except ImportError as e:
    print(f"❌ Not in langchain.agents.agent: {e}")

try:
    from langchain.agents.executor import AgentExecutor
    print("✅ Found in langchain.agents.executor")
except ImportError as e:
    print(f"❌ Not in langchain.agents.executor: {e}")
