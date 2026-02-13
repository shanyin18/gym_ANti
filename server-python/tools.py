"""
自定义 Agent 工具集合
"""
from typing import Type, List, Optional
from pydantic import BaseModel, Field
from tenacity import retry, stop_after_attempt, wait_fixed

from langchain.tools import BaseTool
from langchain_core.documents import Document

from logs_crud import get_history_logs
from vector_store import VectorStoreService


def format_docs(docs: List[Document]) -> str:
    if not docs:
        return "(无相关参考资料)"
    return "\n\n".join([f"文档片段：{doc.page_content}" for doc in docs])


class DietHistoryInput(BaseModel):
    username: str = Field(description="需要查询的用户名 (user_id)")
    limit: int = Field(default=5, description="返回最近几条记录，默认为 5")


class KnowledgeBaseInput(BaseModel):
    query: str = Field(description="用户的具体问题或搜索关键词")


class FoodItem(BaseModel):
    name: str = Field(description="食物名称 (e.g. '苹果', '米饭')")
    quantity: float = Field(description="数量")
    unit: str = Field(description="单位。请自动归一化：将'只/颗/枚'等量词转为'个'，将'勺/汤匙'转为'勺'。默认为'g'。")


class CalorieCalculatorInput(BaseModel):
    food_list: List[FoodItem] = Field(description="需要计算的食物列表")


class DietHistoryTool(BaseTool):
    name: str = "get_diet_history"
    description: str = "查询用户最近的饮食和运动历史记录。当需要了解用户昨天吃了什么、之前的训练情况或卡路里摄入历史时使用此工具。"
    args_schema: Type[BaseModel] = DietHistoryInput

    @retry(stop=stop_after_attempt(3), wait=wait_fixed(0.5))
    def _run(self, username: str, limit: int = 5) -> str:
        try:
            logs = get_history_logs(username, limit=limit)
            if not logs:
                return f"用户 {username} 暂无最近的历史记录。"

            formatted_logs = []
            for log in logs:
                entry = (
                    f"- [{log.get('Date')} {log.get('TimeOfDay')}] {log.get('Type')}: "
                    f"{log.get('Content')} (热量: {log.get('Calories')}kcal, 蛋白: {log.get('Protein')}g)"
                )
                formatted_logs.append(entry)

            return f"查询到用户 {username} 最近 {len(logs)} 条记录：\n" + "\n".join(formatted_logs)
        except Exception as e:
            raise e

    async def _arun(self, username: str, limit: int = 5) -> str:
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
        self._ensure_service()
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
    return_direct: bool = True

    FOOD_DB: dict = {
        "苹果": 52,
        "apple": 52,
        "香蕉": 89,
        "banana": 89,
        "米饭": 116,
        "rice": 116,
        "鸡蛋": 143,
        "egg": 143,
        "boiled egg": 155,
        "牛奶": 54,
        "milk": 54,
        "鸡胸肉": 165,
        "chicken breast": 165,
    }

    UNIT_CONVERSION: dict = {
        "个": 150,
        "根": 120,
        "碗": 200,
        "杯": 250,
        "g": 1,
        "ml": 1,
    }

    def _run(self, food_list: List[FoodItem]) -> str:
        total_calories = 0
        details = []

        for item in food_list:
            food_key = None
            for db_key in self.FOOD_DB:
                if db_key in item.name or item.name in db_key:
                    food_key = db_key
                    break

            if not food_key:
                details.append(f"- {item.name}: 未找到热量数据")
                continue

            unit_factor = 1
            if item.unit in self.UNIT_CONVERSION:
                unit_factor = self.UNIT_CONVERSION[item.unit]

            if ("鸡蛋" in food_key or "egg" in food_key) and item.unit == "个":
                unit_factor = 50

            kcal_per_100g = self.FOOD_DB[food_key]
            item_weight = item.quantity * unit_factor
            item_calories = (item_weight / 100) * kcal_per_100g

            total_calories += item_calories
            details.append(f"- {item.name} ({item.quantity}{item.unit}, 约{item_weight}g): {int(item_calories)} kcal")

        return f"计算结果：\n" + "\n".join(details) + f"\n\n总热量: {int(total_calories)} kcal"

    async def _arun(self, food_list: List[FoodItem]) -> str:
        return self._run(food_list)
