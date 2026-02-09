# RAGAs 评估框架集成技术报告

## 1. 背景与目标

为了量化评估 RAG (Retrieval-Augmented Generation) 系统的性能，我们集成了 **RAGAs (Retrieval Augmented Generation Assessment)** 框架。目标是建立一套自动化评估流程，能够基于现有知识库自动生成测试题，并计算 **RAG 四大核心指标**：

- **Faithfulness (忠实度)**: 答案是否由检索内容推导得出？
- **Answer Relevancy (答案相关性)**: 答案是否直接回答了问题？
- **Context Precision (上下文精确度)**: 检索到的 Top-K 文档中有多少是真正相关的？
- **Context Recall (上下文召回率)**: 是否检索到了所有回答问题所需的信息？

## 2. 核心架构设计

我们采用了 **独立模块化** 的设计，在 `server-python/` 下新建 `evaluation/` 目录，不侵入主业务代码，但复用主服务的配置和向量库逻辑。


## 3. 实现逻辑与代码对比

### 3.1 难点一：适配国产大模型 (豆包)

**问题**: RAGAs 默认深度依赖 OpenAI API，直接运行会报错找不到 `OPENAI_API_KEY`。
**解决方案**: 我们使用 LangChain 的适配器模式，将豆包 LLM (`ChatOpenAI`兼容接口) 和 Embedding 模型封装后传给 RAGAs。

#### ❌ Before (标准 RAGAs 用法)

```python
# 依赖环境变量 OPENAI_API_KEY
from ragas import evaluate
# 隐式调用 OpenAI，无法指定 Base URL 或 Model
result = evaluate(dataset, metrics=[faithfulness, answer_relevancy])
```

#### ✅ After (我们的实现)

```python
# run_eval.py 中显式配置并包装

# 1. 实例化豆包 LLM
eval_llm = ChatOpenAI(
    model=config_eval.doubao_model,
    openai_api_key=config_eval.doubao_api_key,
    openai_api_base=config_eval.doubao_base_url,
    temperature=0,
)
# 关键：使用 LangchainLLMWrapper 包装
wrapped_llm = LangchainLLMWrapper(eval_llm)

# 2. 实例化并包装 Embedding
eval_embeddings = DoubaoMultiModalEmbeddings(...)
wrapped_embeddings = LangchainEmbeddingsWrapper(eval_embeddings)

# 3. 将包装好的实例显式传给 Metrics
metrics = [
    Faithfulness(llm=wrapped_llm),
    AnswerRelevancy(llm=wrapped_llm, embeddings=wrapped_embeddings),
    ...
]

# 4. 运行评估
result = evaluate(dataset, metrics=metrics)
```

### 3.2 难点二：RAGAs 0.4.x 新版结果对象解析

**问题**: RAGAs 升级到 0.4.x 后，`evaluate()` 返回的不再是简单的字典，而是一个复杂的 `EvaluationResult` 对象，旧的 `.items()` 遍历代码会报错。
**解决方案**: 利用新版提供的 `to_pandas()` 方法将结果转换为 DataFrame，再提取数值。

#### ❌ Before (旧版解析逻辑)

```python
# 旧版代码，在 0.4.x 会报 'AttributeError'
for metric, score in result.items():
    print(f"{metric}: {score}")
```

#### ✅ After (我们的兼容性实现)

```python
# run_eval.py 增强解析逻辑

# 优先尝试转换为 Pandas DataFrame (RAGAs 0.4.x+)
if hasattr(result, 'to_pandas'):
    df = result.to_pandas()
    for col in df.columns:
        # 排除非指标列 (question, answer 等)
        if col not in ['question', 'answer', 'contexts', ...]:
            # 确保是数值类型才打印
            if df[col].dtype.kind in 'fi':
                avg_score = df[col].mean()
                scores[col] = avg_score
                print(f"  {col}: {avg_score:.4f}")

elif isinstance(result, dict):
    # 兼容旧版本
    ...
```

## 4. 关键文件清单

| 文件                          | 作用       | 逻辑亮点                                                                                            |
| :---------------------------- | :--------- | :-------------------------------------------------------------------------------------------------- |
| **config_eval.py**      | 配置中心   | `sys.path.insert` 技巧复用主服务配置，避免配置冗余。                                              |
| **generate_testset.py** | 数据生成   | 使用 LLM 阅读 `事例库.md`，模拟用户提问。自动生成 `{question, ground_truth, contexts}` 三元组。 |
| **run_eval.py**         | 评估执行器 | 串联 RAG 流程 -> 构造 HuggingFace Dataset -> 调用 RAGAs -> 容错解析结果。                           |

## 5. 总结

通过本次集成，我们将原本“黑盒”的 RAG 效果变得**可量化**。我们克服了 RAGAs 对 OpenAI 的硬编码依赖，成功适配了豆包模型，并编写了健壮的结果解析代码，为后续优化 Prompt 和检索策略提供了坚实的数据支撑。
