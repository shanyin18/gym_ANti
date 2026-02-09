"""
RAGAs 评估运行脚本
读取测试集，调用 RAG 服务，计算各项指标
"""
import json
import os
import sys

# 添加父目录到 path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from datasets import Dataset
from ragas import evaluate, RunConfig
from ragas.llms import LangchainLLMWrapper
from ragas.embeddings import LangchainEmbeddingsWrapper
from ragas.metrics import (
    Faithfulness,
    AnswerRelevancy,
    ContextPrecision,
    ContextRecall,
)
from langchain_openai import ChatOpenAI, OpenAIEmbeddings

import config_eval
from vector_store import VectorStoreService, DoubaoMultiModalEmbeddings


def load_testset(path):
    """加载测试集"""
    print(f"Loading testset from: {path}")
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def get_rag_response(question, vector_service):
    """调用 RAG 检索获取上下文"""
    retriever = vector_service.get_rerank_retriever()
    if retriever is None:
        return []
    
    docs = retriever.invoke(question)
    contexts = [doc.page_content for doc in docs]
    return contexts


def generate_answer(question, contexts, llm):
    """使用 LLM 生成答案"""
    context_str = "\n".join(contexts)
    prompt = f"""基于以下上下文回答问题。如果无法从上下文中得出答案，请说"无法确定"。

上下文：
{context_str}

问题：{question}

答案："""
    
    response = llm.invoke(prompt)
    return response.content


def run_evaluation():
    """运行完整评估流程"""
    print("=" * 60)
    print("RAGAs Evaluation Runner")
    print("=" * 60)
    
    # 1. 加载测试集
    testset = load_testset(config_eval.testset_output_path)
    if not testset:
        print("❌ Testset is empty! Run generate_testset.py first.")
        return
    
    print(f"Loaded {len(testset)} test samples")
    
    # 2. 初始化服务
    print("\nInitializing services...")
    vector_service = VectorStoreService()
    
    llm = ChatOpenAI(
        model=config_eval.doubao_model,
        openai_api_key=config_eval.doubao_api_key,
        openai_api_base=config_eval.doubao_base_url,
        temperature=config_eval.eval_temperature,
    )
    
    # 3. 为每个测试样本生成 RAG 响应
    print("\nGenerating RAG responses...")
    eval_data = {
        "question": [],
        "answer": [],
        "contexts": [],
        "ground_truth": []
    }
    
    for i, sample in enumerate(testset):
        question = sample["question"]
        ground_truth = sample["ground_truth"]
        
        # 获取检索上下文
        contexts = get_rag_response(question, vector_service)
        
        # 生成答案
        answer = generate_answer(question, contexts, llm)
        
        eval_data["question"].append(question)
        eval_data["answer"].append(answer)
        eval_data["contexts"].append(contexts)
        eval_data["ground_truth"].append(ground_truth)
        
        print(f"  [{i+1}/{len(testset)}] Processed: {question[:40]}...")
    
    # 4. 转换为 HuggingFace Dataset
    dataset = Dataset.from_dict(eval_data)
    
    # 5. 运行 RAGAs 评估
    print("\nRunning RAGAs evaluation...")
    
    # 配置 RAGAs 使用豆包 LLM (关键！需要包装)
    eval_llm = ChatOpenAI(
        model=config_eval.doubao_model,
        openai_api_key=config_eval.doubao_api_key,
        openai_api_base=config_eval.doubao_base_url,
        temperature=0,
    )
    wrapped_llm = LangchainLLMWrapper(eval_llm)
    
    # 使用豆包 Embedding (同样需要包装)
    eval_embeddings = DoubaoMultiModalEmbeddings(
        api_key=config_eval.doubao_api_key,
        model=config_eval.doubao_embedding_model,
        base_url=config_eval.doubao_base_url,
    )
    wrapped_embeddings = LangchainEmbeddingsWrapper(eval_embeddings)
    
    # 初始化指标实例 (RAGAs 0.4.x 要求实例化)
    metrics = [
        Faithfulness(llm=wrapped_llm),
        AnswerRelevancy(llm=wrapped_llm, embeddings=wrapped_embeddings),
        ContextPrecision(llm=wrapped_llm),
        ContextRecall(llm=wrapped_llm),
    ]
    
    try:
        result = evaluate(
            dataset,
            metrics=metrics,
        )
        
        # 6. 输出结果 (RAGAs 0.4.x 返回 EvaluationResult 对象)
        print("\n" + "=" * 60)
        print("📊 EVALUATION RESULTS")
        print("=" * 60)
        
        # 提取指标分数
        scores = {}
        
        # 优先尝试转换为 Pandas DataFrame
        if hasattr(result, 'to_pandas'):
            df = result.to_pandas()
            for col in df.columns:
                # 排除非指标列
                if col not in ['question', 'answer', 'contexts', 'ground_truth', 'user_input', 'reference']:
                    # 计算平均分
                    if df[col].dtype.kind in 'fi': # 确保是数值类型
                        avg_score = df[col].mean()
                        scores[col] = avg_score
                        print(f"  {col}: {avg_score:.4f}")
        
        elif isinstance(result, dict):
            # 旧版兼容
            for k, v in result.items():
                if isinstance(v, (int, float)):
                    scores[k] = v
                    print(f"  {k}: {v:.4f}")
        
        else:
             print(f"Warning: Unknown result type {type(result)}")
             print(result)
        
        # 保存报告
        report = {
            "metrics": scores,
            "sample_count": len(testset),
        }
        
        with open(config_eval.eval_report_path, "w", encoding="utf-8") as f:
            json.dump(report, f, ensure_ascii=False, indent=2)
        
        print(f"\n📄 Report saved to: {config_eval.eval_report_path}")
        print("\n✅ Evaluation complete!")
        
    except Exception as e:
        print(f"\n❌ Evaluation failed: {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    run_evaluation()
