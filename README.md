# 🏋️ Gym ANti - AI健身助手

一个基于AI的个性化健身与营养指导应用，提供智能对话、个性化健身计划和营养建议。

## ✨ 功能特性

- 🤖 **AI智能对话** - 基于Google Gemini/OpenAI的智能健身助手
- 👤 **个性化用户配置** - 根据年龄、性别、身高、体重和健身目标定制建议
- 🔐 **用户认证系统** - 安全的注册/登录功能，支持JWT认证
- 📊 **Excel数据处理** - 支持Excel文件的导入导出
- 🎨 **精美3D界面** - 使用Three.js打造动态云层背景
- 💬 **流畅聊天体验** - 打字机效果、自动滚动等交互优化

## 🛠️ 技术栈

### 前端
- **React 18** - 用户界面框架
- **Vite** - 快速构建工具
- **Three.js** - 3D渲染引擎
- **@react-three/fiber** - React Three.js集成
- **@react-three/drei** - Three.js辅助工具

### 后端
- **Node.js + Express** - 服务端框架
- **MySQL** - 数据库
- **JWT** - 身份认证
- **bcrypt** - 密码加密
- **Google Generative AI** - AI对话接口
- **OpenAI** - 备用AI接口
- **xlsx** - Excel文件处理

## 📦 安装与运行

### 环境要求
- Node.js >= 16.x
- MySQL >= 8.0

### 1. 克隆项目
```bash
git clone https://github.com/YOUR_USERNAME/gym_ANti.git
cd gym_ANti
```

### 2. 安装依赖
```bash
# 安装前端依赖
npm install

# 安装后端依赖
cd server
npm install
cd ..
```

### 3. 配置数据库
在MySQL中创建数据库并导入表结构：
```sql
CREATE DATABASE gym_anti;
```

### 4. 配置环境变量
在 `server` 目录下创建 `.env` 文件：
```env
# 数据库配置
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=gym_anti

# JWT密钥
JWT_SECRET=your_jwt_secret_key

# AI API配置
GEMINI_API_KEY=your_gemini_api_key
OPENAI_API_KEY=your_openai_api_key
PROXY_URL=your_proxy_url (可选)
```

### 5. 启动应用
```bash
# 启动后端服务器（在server目录下）
cd server
npm start

# 启动前端开发服务器（在项目根目录）
npm run dev
```

应用将在以下地址运行：
- 前端：http://localhost:5173
- 后端：http://localhost:3000

## 📁 项目结构

```
gym_ANti/
├── src/                      # 前端源代码
│   ├── components/          # React组件
│   │   ├── ChatInterface.jsx      # 聊天界面
│   │   ├── LoginPage.jsx          # 登录页面
│   │   ├── ProfileSetup.jsx       # 用户配置页面
│   │   ├── ProfilePage.jsx        # 个人资料页面
│   │   ├── CloudBackground.jsx    # 3D云层背景
│   │   ├── MessageBubble.jsx      # 消息气泡组件
│   │   └── Typer.jsx              # 打字机效果组件
│   ├── utils/               # 工具函数
│   ├── App.jsx              # 根组件
│   ├── main.jsx             # 入口文件
│   └── index.css            # 全局样式
├── server/                   # 后端源代码
│   ├── server.js            # Express服务器主文件
│   ├── mysqlHandler.js      # MySQL数据库连接
│   ├── authHandler.js       # 用户认证处理
│   ├── profileHandler.js    # 用户配置处理
│   ├── aiHandler.js         # AI对话处理
│   ├── excelHandler.js      # Excel文件处理
│   └── .env                 # 环境变量配置（需自行创建）
├── .gitignore               # Git忽略文件
├── package.json             # 前端依赖配置
└── README.md                # 项目说明文档
```

## 🔑 主要功能模块

### 用户认证
- 用户注册与登录
- JWT token验证
- 密码加密存储

### 用户配置
- 个人信息管理（年龄、性别、身高、体重）
- 健身目标设定
- 配置数据持久化

### AI对话
- 基于用户配置的个性化回复
- 支持健身和营养相关问题
- 智能上下文理解

### 数据管理
- Excel文件导入导出
- 用户数据CRUD操作
- 数据库备份与恢复

## 🚀 构建部署

### 构建生产版本
```bash
# 构建前端
npm run build

# 构建产物在 dist/ 目录
```

### 生产环境运行
```bash
# 后端
cd server
npm start

# 前端静态文件部署到任意静态服务器
```

## 📝 API接口

### 认证相关
- `POST /api/register` - 用户注册
- `POST /api/login` - 用户登录

### 用户配置
- `GET /api/profile` - 获取用户配置
- `POST /api/profile` - 创建/更新用户配置

### AI对话
- `POST /api/chat` - 发送消息并获取AI回复

## 🤝 贡献指南

欢迎提交Pull Request或Issue！

## 📄 许可证

MIT License

## 👨‍💻 作者

如有问题，欢迎联系。

---

**享受你的健身之旅！💪**
