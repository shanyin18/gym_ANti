import asyncio
import os
import sys

# Add server-python to path
sys.path.append(os.path.join(os.path.dirname(__file__), "server-python"))

from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import StrOutputParser
import config

# Mock Prompt
SYSTEM_PROMPT = """你是一个专业的健身教练和营养师 AI，名叫"小鱼飞飞"。

{user_profile_info}

当前时间: {current_time}

相关知识库内容（供参考）:
{context}

用户历史记录:
{history_context}"""

prompt = ChatPromptTemplate.from_messages([
    ("system", SYSTEM_PROMPT),
    ("human", "{input}")
])

async def test_stream():
    print("Initializing LLM...")
    llm = ChatOpenAI(
        model=config.doubao_model,
        openai_api_key=config.doubao_api_key,
        openai_api_base=config.doubao_base_url,
        temperature=0.7,
    )
    
    print("Building Chain...")
    stream_chain = prompt | llm | StrOutputParser()
    
    input_dict = {
        "user_profile_info": "用户档案：...",
        "current_time": "2026年02月09日 17:30",
        "context": "(知识库暂不可用)",
        "history_context": "(暂无)",
        "input": "吃什么减脂？",
    }
    
    print(f"Prompt Input Variables: {prompt.input_variables}")
    print(f"Input Dict Keys: {list(input_dict.keys())}")
    
    print("Starting Stream...")
    try:
        async for chunk in stream_chain.astream(input_dict):
            print(chunk, end="", flush=True)
        print("\nDone.")
    except Exception as e:
        import traceback
        traceback.print_exc()
        print(f"\nError: {e}")

if __name__ == "__main__":
    asyncio.run(test_stream())
