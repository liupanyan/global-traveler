# 部署文件夹

此文件夹包含项目部署相关的所有文档和配置文件。

## 文件说明

- `DEPLOYMENT.md` - Vercel 部署完整指南
- `vercel.json` - Vercel 配置文件（如需要）
- `环境变量配置说明.md` - 环境变量详细配置说明

## 快速开始

1. 查看 `DEPLOYMENT.md` 了解完整的部署步骤
2. 按照指南在 Vercel 中配置环境变量
3. 推送代码到 GitHub 并部署

## 重要提示

⚠️ **不要将包含 API Key 的文件提交到 Git 仓库**

- `.env.local` 文件已在 `.gitignore` 中
- 只在 Vercel Dashboard 中配置环境变量
- 不要将 API Key 硬编码到代码中

