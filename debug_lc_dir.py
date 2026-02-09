import langchain.agents
print(f"langchain.agents dir: {dir(langchain.agents)}")
try:
    from langchain.agents import AgentExecutor
    print("AgentExecutor IMPORT SUCCESS")
except ImportError as e:
    print(f"AgentExecutor IMPORT FAIL: {e}")
