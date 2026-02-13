"""Pinpoint which step of AgentService.__init__ hangs."""
import sys
import traceback

output_file = "diag.txt"
with open(output_file, "w", encoding="utf-8") as f:
    try:
        f.write("Step 1: Importing config...\n"); f.flush()
        import config
        f.write(f"  Model: {config.doubao_model}\n"); f.flush()

        f.write("Step 2: Importing VectorStoreService...\n"); f.flush()
        from vector_store import VectorStoreService
        f.write("  OK\n"); f.flush()

        f.write("Step 3: Creating VectorStoreService...\n"); f.flush()
        vs = VectorStoreService()
        f.write("  OK\n"); f.flush()

        f.write("Step 4: Importing tools...\n"); f.flush()
        from tools import DietHistoryTool, KnowledgeBaseTool, CalorieCalculatorTool
        f.write("  OK\n"); f.flush()

        f.write("Step 5: Importing LLM...\n"); f.flush()
        from langchain_openai import ChatOpenAI
        f.write("  OK\n"); f.flush()

        f.write("Step 6: Creating LLM...\n"); f.flush()
        llm = ChatOpenAI(
            model=config.doubao_model,
            openai_api_key=config.doubao_api_key,
            openai_api_base=config.doubao_base_url,
            temperature=0.5,
        )
        f.write("  OK\n"); f.flush()

        f.write("Step 7: Importing agent modules...\n"); f.flush()
        from langchain.agents import AgentExecutor, create_tool_calling_agent
        from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
        from langchain.memory import ConversationBufferMemory
        f.write("  OK\n"); f.flush()

        f.write("ALL IMPORTS PASSED!\n"); f.flush()
    except Exception as e:
        f.write(f"FAILED: {type(e).__name__}: {e}\n"); f.flush()
        traceback.print_exc(file=f)
        sys.exit(1)
