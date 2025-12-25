<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1MWlrrs4_AssM8wy3w8Cp69rvHgc2Tg54

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Create a `.env.local` file and set the `VITE_API_KEY` to your Gemini API key:
   ```
   VITE_API_KEY=your_gemini_api_key_here
   ```
   Get your API key from: https://makersuite.google.com/app/apikey
3. Run the app:
   `npm run dev`

## Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. **重要：配置环境变量**
   - 在 Vercel 项目设置中，进入 "Environment Variables"
   - 添加环境变量：
     - **Key**: `VITE_API_KEY`
     - **Value**: 你的 Gemini API Key
     - **Environment**: Production, Preview, Development (全选)
   - 保存后重新部署项目

⚠️ **注意**：环境变量名称必须是 `VITE_API_KEY`（以 `VITE_` 开头），这样 Vite 才能在客户端代码中访问它。

### 模型配置

如果遇到模型未找到的错误（404），可能是以下原因：
1. **API Key 权限问题**：确保您的 API Key 有权限访问 Generative Language API
2. **模型名称**：当前使用 `gemini-1.5-flash-latest`，如果不可用，可以在 `geminiService.ts` 中修改为：
   - `gemini-pro`（稳定版本）
   - `gemini-1.5-pro-latest`（Pro 版本）
3. **API 限制**：检查 Google Cloud Console 中的 API 限制设置
