# GitHub 上传说明

此文件夹已准备好上传到 GitHub，已排除所有无关文件。

## 包含的文件

✅ **源代码文件**
- React 组件文件（App.tsx, Sidebar.tsx, LeafletMap.tsx 等）
- TypeScript 类型定义（types.ts）
- 服务文件（geminiService.ts, storageService.ts）
- API 路由文件（api/ 目录）

✅ **配置文件**
- package.json - 项目依赖配置
- package-lock.json - 依赖版本锁定
- tsconfig.json - TypeScript 配置
- vite.config.ts - Vite 构建配置
- .gitignore - Git 忽略规则

✅ **文档文件**
- README.md - 项目说明
- deployment/ - 部署相关文档
- env.example - 环境变量示例

## 已排除的文件

❌ **不会上传的文件**
- node_modules/ - 依赖包（可通过 npm install 重新安装）
- .env.local - 本地环境变量（包含敏感信息）
- dist/ - 构建产物
- .DS_Store - 系统文件

## 上传步骤

1. **在 GitHub 创建新仓库**
   - 访问 https://github.com
   - 点击 "New repository"
   - 填写仓库名称和描述

2. **初始化 Git 并推送**
   ```bash
   cd global-traveler-github
   git init
   git add .
   git commit -m "Initial commit: Global Traveler app"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **配置环境变量**
   - 参考 `deployment/环境变量配置说明.md`
   - 在 Vercel 中配置 `GOOGLE_GENERATIVE_AI_API_KEY`

4. **部署到 Vercel**
   - 参考 `deployment/GitHub部署步骤.md`
   - 连接 GitHub 仓库并部署

## 注意事项

⚠️ **重要提示**
- 不要将 `.env.local` 文件提交到 Git
- API Key 只在 Vercel 环境变量中配置
- 确保 `.gitignore` 文件已正确配置

## 文件大小

当前文件夹大小：约 348KB（不包含 node_modules）

所有必要的文件都已包含，可以直接上传到 GitHub。

