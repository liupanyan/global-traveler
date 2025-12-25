<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1MWlrrs4_AssM8wy3w8Cp69rvHgc2Tg54

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. **创建 `.env.local` 文件并配置 API Key**：
   ```bash
   # 复制示例文件
   cp env.example .env.local
   
   # 编辑 .env.local 文件，将 your_gemini_api_key_here 替换为您的实际 API Key
   ```
   
   或者手动创建 `.env.local` 文件，内容如下：
   ```
   GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
   ```
   
   获取 API Key: https://makersuite.google.com/app/apikey
   
   **注意**：本地开发时，API Key 存储在服务器端，不会暴露给客户端。

3. Run the app:
   ```bash
   npm run dev
   ```

   **重要提示**：如果遇到 "API Key not found" 错误，请确保：
   - `.env.local` 文件已创建在项目根目录
   - 文件内容格式正确：`GOOGLE_GENERATIVE_AI_API_KEY=你的实际API密钥`
   - 没有多余的空格或引号
   - 重启开发服务器

## Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. **重要：配置环境变量**
   - 在 Vercel 项目设置中，进入 "Environment Variables"
   - 添加环境变量：
     - **Key**: `GOOGLE_GENERATIVE_AI_API_KEY`
     - **Value**: 你的 Gemini API Key
     - **Environment**: Production, Preview, Development (全选)
   - 保存后重新部署项目

✅ **安全优势**：API Key 现在存储在服务器端（Vercel Serverless Functions），不会暴露给客户端，更加安全。

### 环境变量配置问题排查

如果配置了环境变量但仍然提示"API Key 未配置"，请按以下步骤排查：

1. **检查环境变量名称**（区分大小写）：
   - ✅ 正确：`GOOGLE_GENERATIVE_AI_API_KEY`
   - ❌ 错误：`VITE_GOOGLE_GENERATIVE_AI_API_KEY`（旧版本，已不再使用）
   - ❌ 错误：`GOOGLE_API_KEY`（名称不匹配）

2. **检查环境变量作用域**：
   - 在 Vercel 环境变量设置中，确保选择了所有环境：
     - ✅ Production
     - ✅ Preview  
     - ✅ Development

3. **清除缓存并重新部署**：
   - 在 Vercel 项目设置中，进入 "Deployments"
   - 点击最新的部署，选择 "Redeploy"
   - 或者删除环境变量后重新添加并保存

4. **查看浏览器控制台调试信息**：
   - 打开浏览器开发者工具（F12）
   - 查看 Console 标签
   - 应该能看到类似以下信息：
     ```
     🔍 环境变量检查:
     VITE_GOOGLE_GENERATIVE_AI_API_KEY: AIzaSyC...
     所有 VITE_ 开头的环境变量: ["VITE_GOOGLE_GENERATIVE_AI_API_KEY", ...]
     ```
   - 如果看到 "未找到"，说明环境变量未正确注入

5. **验证环境变量**：
   - 在 Vercel 项目设置 → Environment Variables 中
   - 确认变量值已正确保存（没有多余的空格）
   - 确认 API Key 是有效的（可以从 https://makersuite.google.com/app/apikey 重新生成）

### 模型配置

当前使用 `gemini-2.5-flash-latest` 模型（最新版本）。如果遇到模型未找到的错误（404），可能是以下原因：
1. **API Key 权限问题**：确保您的 API Key 有权限访问 Generative Language API
2. **模型名称**：如果 `gemini-2.5-flash-latest` 不可用，可以在 `geminiService.ts` 中修改为：
   - `gemini-1.5-flash-latest`（备用版本）
   - `gemini-pro`（稳定版本）
   - `gemini-1.5-pro`（Pro 版本）
3. **API 限制**：检查 Google Cloud Console 中的 API 限制设置
