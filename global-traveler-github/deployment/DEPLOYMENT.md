# Vercel 部署指南

## 问题诊断

如果部署到 Vercel 后出现 "API Key 找不到" 的错误，请按照以下步骤排查：

## 步骤 1: 检查 Vercel 环境变量配置

1. **登录 Vercel Dashboard**
   - 访问 https://vercel.com/dashboard
   - 选择您的项目

2. **进入环境变量设置**
   - 点击项目 → **Settings** → **Environment Variables**

3. **添加环境变量**
   - **Key**: `GOOGLE_GENERATIVE_AI_API_KEY`（必须完全一致，区分大小写）
   - **Value**: 您的 Gemini API Key（从 https://makersuite.google.com/app/apikey 获取）
   - **Environment**: 必须选择所有环境
     - ✅ Production
     - ✅ Preview
     - ✅ Development

4. **保存并重新部署**
   - 点击 **Save**
   - 进入 **Deployments** 页面
   - 点击最新部署右侧的 **⋯** → **Redeploy**

## 步骤 2: 验证环境变量

### 方法 1: 检查 Vercel 日志
1. 在 Vercel Dashboard 中，进入 **Deployments**
2. 点击最新的部署
3. 查看 **Functions** 标签页中的日志
4. 如果看到 `🔍 检查的环境变量:` 日志，说明代码已运行
5. 检查是否包含 `GOOGLE_GENERATIVE_AI_API_KEY`

### 方法 2: 使用 Vercel CLI
```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 查看环境变量
vercel env ls
```

## 步骤 3: 常见问题排查

### ❌ 问题 1: 环境变量名称错误
- **错误**: `API_KEY` 或 `GEMINI_API_KEY`
- **正确**: `GOOGLE_GENERATIVE_AI_API_KEY`
- **注意**: 代码已支持向后兼容，但建议使用标准名称

### ❌ 问题 2: 环境变量作用域未选择
- **错误**: 只选择了 Production
- **正确**: 必须选择 Production、Preview、Development 三个环境

### ❌ 问题 3: 环境变量值包含空格或引号
- **错误**: `GOOGLE_GENERATIVE_AI_API_KEY="your_key_here"` 或 `GOOGLE_GENERATIVE_AI_API_KEY= your_key_here`
- **正确**: `GOOGLE_GENERATIVE_AI_API_KEY=your_key_here`（无引号，无前后空格）

### ❌ 问题 4: 未重新部署
- 添加环境变量后，必须重新部署才能生效
- 在 Vercel Dashboard 中手动触发重新部署

## 步骤 4: 代码改进说明

代码已进行以下改进：

1. **支持多个环境变量名称**（向后兼容）
   - `GOOGLE_GENERATIVE_AI_API_KEY`（优先）
   - `API_KEY`（兼容）
   - `GEMINI_API_KEY`（兼容）

2. **增强的错误提示**
   - 提供详细的配置步骤
   - 显示当前检查到的环境变量列表
   - 区分本地和生产环境的错误信息

3. **调试日志**
   - 在服务器日志中输出环境变量检查信息
   - 帮助快速定位问题

## 步骤 5: 测试部署

部署完成后，测试 API 端点：

```bash
# 测试 generate-trip API
curl -X POST https://your-project.vercel.app/api/generate-trip \
  -H "Content-Type: application/json" \
  -d '{"prompt": "日本旅行"}'
```

如果返回错误，检查错误信息中的环境变量检查结果。

## 获取 API Key

1. 访问 https://makersuite.google.com/app/apikey
2. 登录您的 Google 账号
3. 点击 **Create API Key**
4. 复制生成的 API Key
5. 在 Vercel 中配置环境变量

## 技术支持

如果问题仍未解决，请检查：
1. Vercel 项目日志中的详细错误信息
2. 环境变量是否正确保存（无多余空格）
3. API Key 是否有效（可以从 Google AI Studio 重新生成）
4. 项目是否已正确连接到 GitHub 仓库

