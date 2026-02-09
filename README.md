# 🏋️ Gym ANti - AI健身助手

一个基于 **LangChain RAG** 的个性化健身与营养指导应用。

## ✨ 功能特性

- 🤖 **RAG 智能对话** - 基于 LangChain + 豆包大模型，结合健身知识库检索
- 👤 **个性化用户配置** - 根据年龄、性别、身高、体重和健身目标定制建议
- 🔐 **用户认证系统** - JWT 认证
- 🎨 **精美3D界面** - Three.js 动态云层背景
- 💬 **流畅聊天体验** - 打字机效果、自动滚动

## 🛠️ 技术栈

### 前端
- **React 18** + **Vite**
- **Three.js** / @react-three/fiber

### 后端 (Python)
- **FastAPI** - Web 框架
- **LangChain** - LLM 编排 (LCEL)
- **ChromaDB** - 向量数据库
- **豆包大模型** - LLM + Embedding
- **MySQL** - 用户数据存储
- **JWT** - 身份认证

## 📦 安装与运行

### 环境要求
- Node.js >= 16.x
- Python >= 3.10
- MySQL >= 8.0

### 1. 克隆项目
```bash
git clone https://github.com/YOUR_USERNAME/gym_ANti.git
cd gym_ANti
```

### 2. 安装依赖
```bash
# 前端依赖
npm install

# 后端依赖
cd server-python
pip install -r requirements.txt
```

### 3. 配置数据库
```sql
CREATE DATABASE gym_anti;
```

### 4. 配置环境变量
复制 `server-python/.env.example` 为 `server-python/.env`，填写配置：
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=gym_anti

JWT_SECRET=your_jwt_secret

DOUBAO_API_KEY=your_doubao_api_key
DOUBAO_MODEL=ep-20251223195501-9x6g5
DOUBAO_EMBEDDING_MODEL=ep-20250115185825-rvwz4
```

### 5. 启动应用
```bash
# 后端 (端口 8000)
cd server-python
uvicorn main:app --reload --port 8000

# 前端 (端口 5173)
npm run dev
```

## 📁 项目结构

```
gym_ANti/
├── src/                      # 前端 (React)
│   ├── components/           # React 组件
│   ├── App.jsx
│   └── config.js             # API 配置
├── server-python/            # 后端 (FastAPI + LangChain)
│   ├── main.py               # FastAPI 入口
│   ├── rag_chain.py          # LangChain RAG 链
│   ├── auth.py               # JWT 认证
│   ├── profile.py            # 用户档案
│   ├── database.py           # MySQL 连接
│   └── chroma_db/            # 向量数据库存储
├── 事例库.md                  # RAG 知识库文档
└── README.md
```

## 🔑 API 接口

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | /api/register | 用户注册 |
| POST | /api/login | 用户登录 |
| GET | /api/profile | 获取用户档案 |
| POST | /api/profile | 保存用户档案 |
| POST | /api/chat | AI 对话 (RAG) |
| GET | /api/history | 历史记录 |
| GET | /api/daily-log | 今日日志 |
| GET | /health | 健康检查 |

## 📄 许可证

MIT License

---

**享受你的健身之旅！💪**

## 📈 性能分析

为了优化系统性能，我们增加了一个自动化的性能瓶颈分析模块。

### 1. 功能
- **CPU 火焰图**: 使用 `py-spy` 生成 svg 火焰图，可视化定位 CPU 热点。
- **负载测试**: 使用 `Locust` 模拟多用户并发登录、查看档案和进行 RAG 对话。
- **自动化分析**: 一键脚本完成环境清理、服务器启动、预热和数据采集。

### 2. 如何运行 (Windows PowerShell)

请以**管理员身份**运行 PowerShell：
```powershell
./server-python/performance/run_analysis.ps1
```
脚本执行完成后，将在 `server-python/performance/profile.svg` 生成火焰图。

### 3. 实现细节
详细的实现逻辑、技术选型和代码变更对比，请参考：
👉 **[变更日志/2026-02-09-性能瓶颈分析模块.md](变更日志/2026-02-09-性能瓶颈分析模块.md)**
