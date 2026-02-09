import uuid
import random
from locust import HttpUser, task, between

class GymUser(HttpUser):
    wait_time = between(1, 3)
    
    def on_start(self):
        """用户初始化：每次都使用唯一用户注册并登录"""
        self.username = f"user_{uuid.uuid4().hex[:8]}"
        self.password = "password123"
        self.token = None
        
        # 1. 注册 (必须成功)
        with self.client.post("/api/register", json={
            "username": self.username,
            "password": self.password
        }, catch_response=True) as response:
            if response.status_code == 200:
                response.success()
            elif response.status_code == 400 and "存在" in response.text:
                # 理论上使用 UUID 不会冲突，但保留容错
                response.success() 
            else:
                response.failure(f"Register failed: {response.text}")
            
        # 2. 登录获取 Token
        with self.client.post("/api/login", json={
            "username": self.username,
            "password": self.password
        }, catch_response=True) as response:
            if response.status_code == 200:
                self.token = response.json().get("access_token")
                response.success()
            else:
                response.failure(f"Login failed: {response.text}")
            
    @task(0)
    def health_check(self):
        """高频轻量级检查"""
        self.client.get("/health")
        
    @task(0)
    def view_profile(self):
        """查看用户档案"""
        if self.token:
            self.client.get("/api/profile", headers={
                "Authorization": f"Bearer {self.token}"
            })

    @task(0)
    def update_profile(self):
        """更新用户档案 (写操作)"""
        if self.token:
            self.client.post("/api/profile", headers={
                "Authorization": f"Bearer {self.token}"
            }, json={
                "age": random.randint(18, 60),
                "weight": random.randint(50, 100)
            })
            
    @task(1)
    def chat_rag(self):
        """模拟 RAG 对话 (高负载)"""
        if self.token:
            questions = [
                "如何增肌?",
                "减脂吃什么?",
                "深蹲怎么做?",
                "制定一个背部训练计划",
                "蛋白质摄入多少合适?"
            ]
            
            # 使用流式接口，这里只触发请求，不完全等待流结束
            # 注意：Locust 默认会将流式响应视为一个请求，直到连接关闭
            with self.client.post("/api/chat/stream", headers={
                "Authorization": f"Bearer {self.token}"
            }, json={
                "message": random.choice(questions)
            }, stream=True, catch_response=True) as response:
                if response.status_code == 200:
                    response.success()
                else:
                    response.failure(f"Status code: {response.status_code}")
