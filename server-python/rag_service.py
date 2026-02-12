"""
RAG 服务模块 (黑马风格 LCEL 版本)
使用 LCEL 管道操作符 (|) 编排检索 + 生成流程
"""
import json
from datetime import datetime
from typing import Optional
from operator import itemgetter

from langchain_openai import ChatOpenAI
from langchain_core.documents import Document
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough, RunnableLambda, RunnableParallel
from langsmith import traceable

from vector_store import VectorStoreService
import config


# ============ 工具函数 ============

def format_docs(docs: list[Document]) -> str:
    """格式化检索到的文档列表"""
    if not docs:
        return "(无相关参考资料)"
    return "\n\n".join([f"文档片段：{doc.page_content}" for doc in docs])


def format_user_profile(user_profile: Optional[dict]) -> str:
    """格式化用户档案"""
    if not user_profile:
        return "用户尚未设置个人档案。"
    return f"""用户档案：
- 年龄: {user_profile.get('age')}岁
- 性别: {'男' if user_profile.get('gender') == 'male' else '女'}
- 身高: {user_profile.get('height')}cm
- 体重: {user_profile.get('weight')}kg
- 目标: {user_profile.get('goal')}
- 每日热量目标: {user_profile.get('daily_calories')}kcal
- 每日蛋白质目标: {user_profile.get('daily_protein')}g"""


def format_history(history_logs: list) -> str:
    """格式化历史记录"""
    if not history_logs:
        return "(暂无历史记录)"
    return "\n".join([
        f"{log.get('Date', '')} {log.get('TimeOfDay', '')} - {log.get('Type', '')}: "
        f"{log.get('Content', '')} ({log.get('Calories', 0)}kcal, {log.get('Protein', 0)}g蛋白质)"
        for log in history_logs
    ])


def parse_ai_response(text: str) -> dict:
    """从 AI 响应中提取 JSON"""
    first_open = text.find("{")
    if first_open == -1:
        return {"logs": [], "reply": text}
    
    temp_text = text[first_open:]
    closing_indices = [i for i, c in enumerate(temp_text) if c == "}"]
    
    for i in reversed(closing_indices):
        candidate = temp_text[:i + 1]
        try:
            return json.loads(candidate)
        except json.JSONDecodeError:
            continue
    
    return {"logs": [], "reply": text}


def get_current_time() -> str:
    """获取当前时间字符串"""
    return datetime.now().strftime("%Y年%m月%d日 %H:%M")


# ============ Prompt 模板 ============

SYSTEM_PROMPT = """你是一个专业的健身教练和营养师 AI，名叫"小鱼飞飞"。

{user_profile_info}

你的任务是处理用户的自然语言输入，并返回 JSON 格式的数据供系统记录到数据库，同时给出一段自然的中文回复。

**重要：timeOfDay 判断逻辑**
根据用户提问的时间（会在下方提供）自动判断是哪一餐：
- 06:00-10:00 → "Morning" (早餐)
- 11:00-14:00 → "Noon" (午餐)  
- 17:00-20:00 → "Evening" (晚餐)
- 其他时间 → "Snack" (加餐)

如果用户明确说明了时间（如"中午吃了"、"晚上练了"），优先按用户说的来判断。

请严格以 JSON 格式返回，不要包含 markdown 代码块标记，直接返回 JSON 字符串。
返回格式:
{{
  "logs": [
    {{
      "timeOfDay": "Morning" | "Noon" | "Evening" | "Snack" (根据上述规则判断),
      "type": "Diet" | "Workout",
      "content": "摘要内容 (如: 3个鸡蛋)",
      "calories": 200 (预估值),
      "protein": 20 (预估值),
      "notes": "给用户的简短建议/评价"
    }}
  ],
  "reply": "直接给用户的回复文本，包含分析和建议，语气亲切专业。"
}}

逻辑规则：
1. **饮食逻辑**:
   - 必须基于"当前已摄入"来计算下一顿的建议。
   - 比如早上吃了很少，要提醒中午多吃。
   - 如果用户问"下一顿吃多少"，请根据剩余缺口计算。

2. **训练逻辑 (双重渐进法)**:
   - 如果用户记录了训练，请评价其负荷。
   - 比较上次训练来建议加重或加次数。

当前时间: {current_time}

相关知识库内容（供参考）:
{context}

用户历史记录:
{history_context}"""

prompt = ChatPromptTemplate.from_messages([
    ("system", SYSTEM_PROMPT),
    ("human", "{input}")
])


# ============ RAG 服务类 (黑马风格) ============

class RagService:
    """RAG 服务类 - 使用 LCEL 链式调用"""
    
    def __init__(self):
        """初始化各组件"""
        # 1. 初始化向量库
        self.vector_service = VectorStoreService()
        
        # 2. 初始化 LLM
        self.llm = ChatOpenAI(
            model=config.doubao_model,
            openai_api_key=config.doubao_api_key,
            openai_api_base=config.doubao_base_url,
            temperature=0.7,
        )
        
        # 3. 构建 LCEL 链 (核心！)
        self.chain = self._build_chain()
    
    def _build_chain(self):
        """
        构建 LCEL 链 (黑马风格)
        
        数据流：
        input_dict -> prompt -> llm -> StrOutputParser -> parse_ai_response
        """
        # 使用管道操作符 (|) 连接各组件
        chain = (
            prompt.with_config({"run_name": "FitnessPrompt"})               # 1. 填充 Prompt 模板
            | self.llm.with_config({"run_name": "DoubaoLLM"})              # 2. 调用大模型
            | StrOutputParser().with_config({"run_name": "ParseOutput"})    # 3. 提取文本内容
            | RunnableLambda(parse_ai_response).with_config({"run_name": "ExtractJSON"})  # 4. 解析 JSON
        ).with_config({"run_name": "GymAnti_RAG_Chain"})
        return chain
    
    @traceable(run_type="chain", name="GymAnti_RAG_Process")
    async def process(self, message: str, history_logs: list, user_profile: Optional[dict]):
        """
        非流式处理 (用于测试或非 SSE 场景)
        """
        # 1. 准备数据
        current_time = get_current_time()
        user_profile_info = format_user_profile(user_profile)
        history_context = format_history(history_logs)
        
        # 2. 检索
        retriever = self.vector_service.get_rerank_retriever()
        if retriever:
            docs = await retriever.ainvoke(message)
            context = format_docs(docs)
        else:
            context = "(知识库暂不可用)"
            
        # 3. 构造输入
        input_dict = {
            "user_profile_info": user_profile_info,
            "current_time": current_time,
            "context": context,
            "history_context": history_context,
            "input": message,
        }
        
        # 4. 执行链 (带 Trace)
        return await self.chain.ainvoke(input_dict)
    
    @traceable(run_type="chain", name="GymAnti_RAG_Stream")
    async def process_stream(self, message: str, history_logs: list, user_profile: Optional[dict]):
        """
        流式处理用户消息 (黑马风格)
        
        使用 LCEL 的 astream() 方法逐 token 输出
        :param message: 用户输入
        :param history_logs: 历史记录
        :param user_profile: 用户档案
        :yields: 每个 token 的文本片段
        """
        try:
            # ===== Step 1: 准备上下文数据 =====
            current_time = get_current_time()
            user_profile_info = format_user_profile(user_profile)
            history_context = format_history(history_logs)
            
            # ===== Step 2: 检索相关文档 (使用 Rerank 重排) =====
            retriever = self.vector_service.get_rerank_retriever()
            if retriever is not None:
                docs = await retriever.ainvoke(message)  # ✅ 异步检索 + 批处理
                context = format_docs(docs)
            else:
                context = "(知识库暂不可用)"
            
            # ===== Step 3: 打包输入字典 =====
            input_dict = {
                "user_profile_info": user_profile_info,
                "current_time": current_time,
                "context": context,
                "history_context": history_context,
                "input": message,
            }
            
            # ===== Step 3.5: 检查缓存 (Redis) =====
            from cache_manager import cache_manager
            
            # 生成缓存 Key (包含所有输入因子)
            cache_key = cache_manager.generate_key("llm_response", json.dumps(input_dict, sort_keys=True, ensure_ascii=False))
            cached_response = await cache_manager.get(cache_key)
            
            if cached_response:
                print(f"⚡ Cache Hit! Serving from Redis.")
                yield cached_response
                return

            # ===== Step 4: 构建流式链 (不解析 JSON，只输出原始文本) =====
            # Fix: Add RunnablePassthrough() to explicitly accept dictionary input
            stream_chain = (
                RunnablePassthrough()
                | prompt.with_config({"run_name": "FitnessPrompt"})
                | self.llm.with_config({"run_name": "DoubaoLLM"})
                | StrOutputParser().with_config({"run_name": "ParseOutput"})
            ).with_config({"run_name": "GymAnti_Stream_Chain"})
            
            # ===== Step 5: 流式输出 (核心！黑马风格) =====
            full_response = ""
            async for chunk in stream_chain.astream(input_dict):
                full_response += chunk
                yield chunk
            
            # 写入缓存 (1小时过期)
            if full_response:
                await cache_manager.set(cache_key, full_response, ttl=3600)
                
        except Exception as e:
            print(f"Stream Error: {repr(e)}")
            yield f"抱歉，AI 服务暂时不可用 ({str(e)})"


# ============ 全局单例管理 ============

_rag_service: Optional[RagService] = None


def get_rag_service() -> RagService:
    """获取 RAG 服务单例"""
    global _rag_service
    if _rag_service is None:
        _rag_service = RagService()
    return _rag_service


def init_rag_service():
    """初始化 RAG 服务（应用启动时调用）"""
    global _rag_service
    _rag_service = RagService()
    print("RagService initialized (LCEL style)")


# ============ 测试入口 ============

if __name__ == '__main__':
    import asyncio
    
    async def test():
        """测试 RAG 服务"""
        service = RagService()
        result = await service.process("今天早上吃了3个鸡蛋", [], None)
        print("=" * 50)
        print("测试结果:")
        print(f"  logs: {result.get('logs')}")
        print(f"  reply: {result.get('reply')}")
    
    asyncio.run(test())
