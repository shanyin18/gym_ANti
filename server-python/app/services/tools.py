"""
自定义 Agent 工具集合
"""
from typing import Type, List, Optional
from pydantic import BaseModel, Field
from tenacity import retry, stop_after_attempt, wait_fixed, retry_if_exception_type

from langchain.tools import BaseTool
from app.db.crud.logs import get_history_logs
from app.services.vector_store import VectorStoreService
from langchain_core.documents import Document

# 辅助函数：格式化文档 (复用 rag_service 逻辑)
def format_docs(docs: List[Document]) -> str:
    if not docs:
        return "(无相关参考资料)"
    return "\n\n".join([f"文档片段：{doc.page_content}" for doc in docs])

# ============ Input Schema 定义 ============

class DietHistoryInput(BaseModel):
    """查询饮食记录工具的输入 schema"""
    username: str = Field(description="需要查询的用户名 (user_id)")
    limit: int = Field(default=5, description="返回最近几条记录，默认为 5")

class KnowledgeBaseInput(BaseModel):
    """查询知识库工具的输入 schema"""
    query: str = Field(description="用户的具体问题或搜索关键词")

class FoodItem(BaseModel):
    """单个食物项"""
    name: str = Field(description="食物名称 (e.g. '苹果', '米饭')")
    quantity: float = Field(description="数量")
    unit: str = Field(description="单位。请自动归一化：将'只/颗/枚'等量词转为'个'，将'勺/汤匙'转为'勺'。默认为'g'。")

class CalorieCalculatorInput(BaseModel):
    """卡路里计算工具的输入 schema"""
    food_list: List[FoodItem] = Field(description="需要计算的食物列表")

class DietHistoryTool(BaseTool):
    # ... (name, description, args_schema remain same) ...
    name: str = "get_diet_history"
    description: str = "查询用户最近的饮食和运动历史记录。当需要了解用户昨天吃了什么、之前的训练情况或卡路里摄入历史时使用此工具。"
    args_schema: Type[BaseModel] = DietHistoryInput

    @retry(stop=stop_after_attempt(3), wait=wait_fixed(0.5))
    def _run(self, username: str, limit: int = 5) -> str:
        """同步执行工具操作 (带重试)"""
        try:
            logs = get_history_logs(username, limit=limit)
            if not logs:
                return f"用户 {username} 暂无最近的历史记录。"
            
            # 格式化输出，让 LLM 更容易理解
            formatted_logs = []
            for log in logs:
                entry = (
                    f"- [{log.get('Date')} {log.get('TimeOfDay')}] {log.get('Type')}: "
                    f"{log.get('Content')} (热量: {log.get('Calories')}kcal, 蛋白: {log.get('Protein')}g)"
                )
                formatted_logs.append(entry)
            
            return f"查询到用户 {username} 最近 {len(logs)} 条记录：\n" + "\n".join(formatted_logs)
            
        except Exception as e:
            # tenacity 会捕获异常并重试。如果最终还是失败，抛出异常让上层捕获
            # 但是 Agent 工具最好返回字符串错误信息，而不是抛出异常崩溃
            # 这里的 tricky 之处是：tenacity 是装饰在 _run 上的，如果 _run 内部 catch 了所有 Exception 并返回 str，tenacity 就不会 retry 了。
            # 所以我们需要把 try-catch 移到 _run 内部逻辑里？不，应该让 tenacity 捕获异常，
            # 然后我们在最外层（或者 retry 的 reraise=True 后）捕获？
            # 更好的做法是：不捕获 Exception，让 tenacity retry。
            # 等 tenacity 放弃后，它会抛出 RetryError。
            # 我们需要在 _run 外面再包一层？或者 accept tenacity raising RetryError?
            # LangChain AgentExecutor handle_parsing_errors=True 处理的是 OutputParserException。
            # 对于 Tool ececution error，AgentExecutor 也有 handle_tool_error 参数。
            # 如果 handle_tool_error=True (默认是 False? 需要检查)，则会把异常转为字符串返回给 Agent 继续思考。
            # 我们在 AgentService 里设置了 handle_parsing_errors=True，但 handle_tool_error 呢？
            raise e 

    async def _arun(self, username: str, limit: int = 5) -> str:
        """异步执行"""
        return self._run(username, limit)


class KnowledgeBaseTool(BaseTool):
    name: str = "search_knowledge_base"
    description: str = "查询健身专业知识库。仅在用户询问关于减脂、增肌、饮食建议、训练方法等通用概念时使用。**禁止**用于查询食物的具体热量值（应使用计算器）。"
    args_schema: Type[BaseModel] = KnowledgeBaseInput
    
    _vector_service: Optional[VectorStoreService] = None

    def _ensure_service(self):
        if not self._vector_service:
            self._vector_service = VectorStoreService()

    @retry(stop=stop_after_attempt(3), wait=wait_fixed(2))
    def _run(self, query: str) -> str:
        """同步执行 (带重试)"""
        self._ensure_service()
        # 这里不 catch Exception，让 tenacity 工作
        # 如果重试 3 次后仍失败，tenacity 会抛出 RetryError
        # AgentExecutor 建议配置 handle_tool_error=True 来捕获它
        retriever = self._vector_service.get_rerank_retriever()
        if retriever is None:
            return "知识库服务暂时不可用 (Retriever Init Failed)。"
        
        docs = retriever.invoke(query)
        return format_docs(docs)

    async def _arun(self, query: str) -> str:
        return self._run(query)


class CalorieCalculatorTool(BaseTool):
    name: str = "calculate_food_calories"
    description: str = "计算食物热量。当用户询问“2个苹果多少热量”或“一碗米饭和3个鸡蛋的热量”等涉及食物数量和热量计算的问题时使用。"
    args_schema: Type[BaseModel] = CalorieCalculatorInput
    return_direct: bool = True # 直接返回结果，停止 Agent 继续思考，极大加速相应


    # 简单的 Mock Database
    FOOD_DB: dict = {
        "苹果": 52, "apple": 52, # kcal per 100g (normalized) or per unit
        "香蕉": 89, "banana": 89,
        "米饭": 116, "rice": 116,
        "鸡蛋": 143, "egg": 143, "boiled egg": 155,
        "牛奶": 54, "milk": 54,
        "鸡胸肉": 165, "chicken breast": 165
    }

    # 简单的单位换算 (Mock)
    UNIT_CONVERSION: dict = {
        "个": 150, # 假设平均 1 个 = 150g (苹果/香蕉/鸡蛋等粗略平均)
        "根": 120, # 香蕉
        "碗": 200, # 米饭
        "杯": 250, # 牛奶
        "g": 1,
        "ml": 1,
    }

    def _run(self, food_list: List[FoodItem]) -> str:
        total_calories = 0
        details = []

        for item in food_list:
            # 1. 查找食物 (简单模糊匹配)
            # 这里做个简单的包含匹配
            food_key = None
            for db_key in self.FOOD_DB:
                if db_key in item.name or item.name in db_key:
                    food_key = db_key
                    break
            
            if not food_key:
                details.append(f"- {item.name}: 未找到热量数据")
                continue

            # 2. 确定单位系数
            # 由于我们在 Schema 里已经要求 LLM 做归一化 ("只"->"个")
            # 这里代码就可以写得非常干净，只处理标准单位
            unit_factor = 1
            if item.unit in self.UNIT_CONVERSION:
                 unit_factor = self.UNIT_CONVERSION[item.unit]
            
            # 鸡蛋特殊处理 (个头小)
            if "鸡蛋" in food_key or "egg" in food_key:
                 if item.unit == "个":
                     unit_factor = 50 # 50g

            # 3. 计算
            kcal_per_100g = self.FOOD_DB[food_key]
            item_weight = item.quantity * unit_factor
            item_calories = (item_weight / 100) * kcal_per_100g
            
            total_calories += item_calories
            details.append(f"- {item.name} ({item.quantity}{item.unit}, 约{item_weight}g): {int(item_calories)} kcal")

        return f"计算结果：\n" + "\n".join(details) + f"\n\n总热量: {int(total_calories)} kcal"

    async def _arun(self, food_list: List[FoodItem]) -> str:
        return self._run(food_list)



# ============ 测试代码 ============
if __name__ == "__main__":
    # 用于简单的模块内测试
    tool = DietHistoryTool()
    print(f"Tool Name: {tool.name}")
    print(f"Tool Args: {tool.args}")
    
    # 模拟一次调用 (假设数据库能连接且有数据，否则会报错/空)
    # 注意：直接运行此文件需要确保在项目根目录下，并且环境变量配置正确
    try:
        from app.db.session import engine
        # 确保 DB 连接初始化（如果 crud 模块依赖全局初始化）
        print("Testing tool execution (mock user 'test_user')...")
        result = tool.run({"username": "test_user", "limit": 3})
        print("Result:")
        print(result)
    except Exception as e:
        print(f"Test run failed (expected if DB not configured): {e}")
