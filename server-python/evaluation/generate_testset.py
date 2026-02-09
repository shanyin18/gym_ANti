"""
RAGAs 测试集自动生成脚本
读取知识库，使用 LLM 自动生成高质量测试问题
"""
import json
import os
import sys

# 添加父目录到 path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from langchain_openai import ChatOpenAI
from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter

import config_eval


def load_documents():
    """加载并切分知识库文档"""
    print(f"Loading knowledge base from: {config_eval.knowledge_path}")
    
    with open(config_eval.knowledge_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=100,
        separators=["\n---\n", "\n\n", "\n", "。", "，", " "]
    )
    
    docs = splitter.create_documents([content])
    print(f"Loaded {len(docs)} document chunks")
    return docs


def generate_testset_manual(docs, num_questions=10):
    """
    手动生成测试集 (简化版)
    使用 LLM 为每个文档块生成问答对
    """
    llm = ChatOpenAI(
        model=config_eval.doubao_model,
        openai_api_key=config_eval.doubao_api_key,
        openai_api_base=config_eval.doubao_base_url,
        temperature=config_eval.eval_temperature,
    )
    
    testset = []
    
    # 限制文档数量
    selected_docs = docs[:num_questions] if len(docs) > num_questions else docs
    
    print(f"\nGenerating {len(selected_docs)} test questions...")
    
    for i, doc in enumerate(selected_docs):
        context = doc.page_content
        
        # 使用 LLM 生成问题
        prompt = f"""基于以下上下文，生成一个具体的问题，并提供准确的答案。

上下文：
{context}

请用以下 JSON 格式回答 (不要添加其他文字)：
{{"question": "你的问题", "ground_truth": "基于上下文的准确答案"}}"""
        
        try:
            response = llm.invoke(prompt)
            result = json.loads(response.content)
            
            testset.append({
                "question": result["question"],
                "ground_truth": result["ground_truth"],
                "contexts": [context]
            })
            print(f"  [{i+1}/{len(selected_docs)}] Generated: {result['question'][:50]}...")
            
        except Exception as e:
            print(f"  [{i+1}/{len(selected_docs)}] Error: {e}")
            continue
    
    return testset


def save_testset(testset, output_path):
    """保存测试集为 JSON"""
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(testset, f, ensure_ascii=False, indent=2)
    print(f"\nTestset saved to: {output_path}")


def main():
    print("=" * 60)
    print("RAGAs Testset Generator")
    print("=" * 60)
    
    # 1. 加载文档
    docs = load_documents()
    
    # 2. 生成测试集
    testset = generate_testset_manual(docs, num_questions=config_eval.testset_size)
    
    # 3. 保存
    save_testset(testset, config_eval.testset_output_path)
    
    print(f"\n✅ Generated {len(testset)} test samples!")


if __name__ == "__main__":
    main()
