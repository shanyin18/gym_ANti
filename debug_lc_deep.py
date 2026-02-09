import langchain
import os
import sys

print(f"LangChain Version: {langchain.__version__}")
print(f"LangChain Path: {langchain.__file__}")

agents_path = os.path.join(os.path.dirname(langchain.__file__), "agents")
print(f"Agents Path: {agents_path}")

if os.path.exists(agents_path):
    print(f"Agents content: {os.listdir(agents_path)}")
else:
    print("Agents directory does not exist!")

try:
    from langchain.agents import AgentExecutor
    print("SUCCESS: from langchain.agents import AgentExecutor")
except ImportError as e:
    print(f"FAIL: {e}")

try:
    import langchain.agents
    print(f"langchain.agents dir: {dir(langchain.agents)}")
except Exception as e:
    print(f"FAIL inspecting agents: {e}")
