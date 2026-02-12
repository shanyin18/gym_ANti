# 变更日志 - Prometheus 监控集成

**日期：** 2026-02-11
**变更类型：** 新功能 (Feature) / 可观测性 (Observability)
**作者：** Gemini Agent

---

## 1. 变更背景与目标

为了提升后端服务的可观测性，我们需要引入 **Prometheus** 监控。
目前系统缺乏对 API 性能的量化数据，无法回答“接口有多快”、“有没有报错”、“有多少人在用”等问题。

本次变更的目标是：
1.  **自动暴露指标**：无需手动埋点，自动采集所有 API 的 QPS、响应时间（Latency）和错误率。
2.  **标准格式**：提供标准的 `/metrics` 端点，供 Prometheus 服务器抓取。
3.  **零侵入性**：尽量少改动业务代码，采用中间件（Middleware）模式实现。

---

## 2. 实现逻辑

我们使用了 `prometheus-fastapi-instrumentator` 库。它的工作原理是利用 FastAPI 的中间件机制：

1.  **Instrument（埋点）**：
    *   在请求 **进入** 时，记录开始时间。
    *   在请求 **结束** 时，计算耗时（Duration = Now - Start），并根据状态码（Status Code）和处理器（Handler）更新相应的计数器（Counter）和直方图（Histogram）。
2.  **Expose（暴露）**：
    *   在 `/metrics` 路径上注册一个 GET 接口。
    *   当访问该接口时，将内存中统计的所有数据序列化为 Prometheus 文本格式返回。

---

## 3. 代码变更对比

### 3.1 依赖管理 (`requirements.txt`)

引入了 `prometheus-fastapi-instrumentator` 库。

```diff
  # ===== 链路追踪 (第五周新增) =====
  langsmith             # LangSmith 链路追踪
  
+ # ===== 指标监控 (Prometheus) =====
+ prometheus-fastapi-instrumentator>=7.0.0
+
  # ===== 性能分析工具 (新增) =====
  py-spy                # 采样分析器
```

### 3.2 主程序入口 (`main.py`)

在 FastAPI 应用启动时初始化 Instrumentator。

**变更前：**
```python
from app.services.agent_service import init_agent_service, get_agent_service
from vector_store import VectorStoreService
from app.services.pdf_parser import get_pdf_parser


# ============ Pydantic Models ============
```

**变更后：**
```python
from app.services.agent_service import init_agent_service, get_agent_service
from vector_store import VectorStoreService
from app.services.pdf_parser import get_pdf_parser
# [NEW] 导入 Instrumentator
from prometheus_fastapi_instrumentator import Instrumentator


# ============ Pydantic Models ============
```

**变更前：**
```python
# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
```

**变更后：**
```python
# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# [NEW] 初始化并暴露 /metrics 端点
# instrument(app): 注册中间件，开始采集数据
# expose(app): 注册 /metrics 路由，允许外部抓取
Instrumentator().instrument(app).expose(app, endpoint="/metrics")


from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
```

---

## 4. 验证结果

变更后，访问 `http://localhost:8000/metrics`，可以看到如下格式的数据（截取）：

```text
# HELP http_requests_total Total number of HTTP requests.
# TYPE http_requests_total counter
http_requests_total{handler="/api/login",method="POST",status="2xx"} 12.0
http_requests_total{handler="/api/chat",method="POST",status="5xx"} 1.0

# HELP http_request_duration_seconds Histogram of request processing time.
# TYPE http_request_duration_seconds histogram
http_request_duration_seconds_bucket{handler="/api/chat",le="0.1"} 5.0
http_request_duration_seconds_sum{handler="/api/chat"} 1.2
```

这证明监控指标已成功集成并开始工作。
