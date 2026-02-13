# 使用官方 Node.js 18 镜像 (与本地 package.json 里的 react 18 匹配)
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json (如果有)
COPY package*.json ./

# 使用淘宝镜像加速 (可选)
RUN npm config set registry https://registry.npmmirror.com

# 删除可能存在的残留并重新安装
RUN rm -rf node_modules package-lock.json && npm install

# 复制项目所有文件
COPY . .

# 暴露端口 (Vite 默认 5173，但 package.json 里写的是 5176，我们统一用 5176)
EXPOSE 5176

# 启动开发服务器
CMD ["npm", "run", "dev"]
