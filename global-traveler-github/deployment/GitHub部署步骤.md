# GitHub 部署到 Vercel 完整步骤

## 前置准备

1. ✅ 已创建 GitHub 账号
2. ✅ 已创建 Vercel 账号
3. ✅ 已获取 Google Gemini API Key

## 步骤 1: 准备代码

### 1.1 检查 .gitignore
确保 `.gitignore` 包含以下内容：
```
.env.local
.env
node_modules/
dist/
.DS_Store
```

### 1.2 提交代码到 Git
```bash
# 初始化 Git 仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "准备部署到 Vercel"
```

## 步骤 2: 推送到 GitHub

### 2.1 在 GitHub 创建新仓库
1. 登录 https://github.com
2. 点击右上角 "+" → "New repository"
3. 填写仓库名称（如：`global-traveler`）
4. 选择 Public 或 Private
5. **不要**勾选 "Initialize this repository with a README"
6. 点击 "Create repository"

### 2.2 推送代码
```bash
# 添加远程仓库（替换 YOUR_USERNAME 和 REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 推送代码
git branch -M main
git push -u origin main
```

## 步骤 3: 在 Vercel 中部署

### 3.1 导入项目
1. 登录 https://vercel.com/dashboard
2. 点击 "Add New..." → "Project"
3. 选择 "Import Git Repository"
4. 选择您的 GitHub 仓库
5. 点击 "Import"

### 3.2 配置项目
- **Framework Preset**: Vite（应该自动检测）
- **Root Directory**: `./`（默认）
- **Build Command**: `npm run build`（默认）
- **Output Directory**: `dist`（默认）
- **Install Command**: `npm install`（默认）

### 3.3 配置环境变量
**重要：在部署前配置环境变量**

1. 在项目配置页面，找到 "Environment Variables"
2. 点击 "Add" 添加环境变量：
   - **Key**: `GOOGLE_GENERATIVE_AI_API_KEY`
   - **Value**: 您的 Gemini API Key
   - **Environment**: 选择所有环境
     - ✅ Production
     - ✅ Preview
     - ✅ Development
3. 点击 "Save"

### 3.4 部署
1. 点击 "Deploy"
2. 等待部署完成（通常 1-3 分钟）
3. 部署成功后，Vercel 会提供一个 URL（如：`https://your-project.vercel.app`）

## 步骤 4: 验证部署

### 4.1 测试 API
```bash
# 测试 generate-trip API
curl -X POST https://your-project.vercel.app/api/generate-trip \
  -H "Content-Type: application/json" \
  -d '{"prompt": "日本旅行"}'
```

### 4.2 检查日志
1. 在 Vercel Dashboard 中，进入项目
2. 点击 "Deployments" → 最新的部署
3. 查看 "Functions" 标签页
4. 检查是否有错误日志

### 4.3 访问应用
在浏览器中访问 Vercel 提供的 URL，测试应用功能。

## 步骤 5: 后续更新

### 自动部署
- 每次推送到 GitHub 的 `main` 分支，Vercel 会自动重新部署
- 推送到其他分支会创建 Preview 部署

### 手动重新部署
1. 在 Vercel Dashboard 中，进入 "Deployments"
2. 找到要重新部署的版本
3. 点击 "⋯" → "Redeploy"

## 常见问题

### Q: 部署后 API 返回 500 错误
**A**: 检查环境变量是否正确配置：
1. 确认环境变量名称：`GOOGLE_GENERATIVE_AI_API_KEY`
2. 确认已选择所有环境
3. 确认 API Key 值正确
4. 重新部署项目

### Q: 如何更新环境变量？
**A**: 
1. 进入项目 Settings → Environment Variables
2. 编辑或添加环境变量
3. 保存后重新部署

### Q: 如何查看部署日志？
**A**:
1. 进入 Deployments 页面
2. 点击具体的部署
3. 查看 "Functions" 或 "Build Logs" 标签页

### Q: 如何回滚到之前的版本？
**A**:
1. 进入 Deployments 页面
2. 找到要回滚的版本
3. 点击 "⋯" → "Promote to Production"

## 技术支持

如果遇到问题：
1. 查看 Vercel 部署日志
2. 检查环境变量配置
3. 参考 `DEPLOYMENT.md` 中的故障排除部分
4. 查看 Vercel 官方文档：https://vercel.com/docs

