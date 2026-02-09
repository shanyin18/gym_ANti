
import sys
print("Start")
try:
    from langchain_openai import OpenAIEmbeddings
    print("Imported langchain_openai")
except Exception as e:
    print(f"Import Error: {e}")
print("End")
