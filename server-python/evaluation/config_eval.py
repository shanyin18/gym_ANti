"""
RAGAs 评估配置模块
复用主服务配置，添加评估专用设置
"""
import sys
import os

# 将父目录加入 path 以便导入主服务配置
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import config as main_config

# ============ 复用主服务配置 ============
doubao_api_key = main_config.doubao_api_key
doubao_base_url = main_config.doubao_base_url
doubao_model = main_config.doubao_model
doubao_embedding_model = main_config.doubao_embedding_model

# ============ 评估专用配置 ============
# 测试集生成
testset_size = 10  # 生成的测试样本数量
testset_output_path = os.path.join(os.path.dirname(__file__), "testset.json")

# 评估报告输出
eval_report_path = os.path.join(os.path.dirname(__file__), "eval_report.json")

# LLM 评估温度 (建议设为 0 以保证可重复性)
eval_temperature = 0.0

# 知识库路径 (用于生成测试集)
knowledge_path = main_config.knowledge_path
