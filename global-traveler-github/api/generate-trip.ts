import { GoogleGenerativeAI } from "@google/generative-ai";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { readFileSync } from "fs";
import { resolve } from "path";

// 本地开发时加载环境变量
if (process.env.NODE_ENV !== "production" && !process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
  try {
    const envPath = resolve(process.cwd(), ".env.local");
    const envFile = readFileSync(envPath, "utf-8");
    envFile.split("\n").forEach((line) => {
      const match = line.match(/^([^=:#]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim().replace(/^["']|["']$/g, "");
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    });
  } catch (e) {
    // .env.local 文件不存在或无法读取，忽略错误
    console.warn("⚠️ 无法加载 .env.local 文件，请确保已创建该文件并设置 GOOGLE_GENERATIVE_AI_API_KEY");
  }
}

// 获取 API Key（支持多个环境变量名称，向后兼容）
function getApiKey(): string | undefined {
  // 优先使用标准名称
  if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  }
  // 兼容其他可能的名称
  if (process.env.API_KEY) {
    console.warn("⚠️ 使用 API_KEY 环境变量，建议使用 GOOGLE_GENERATIVE_AI_API_KEY");
    return process.env.API_KEY;
  }
  if (process.env.GEMINI_API_KEY) {
    console.warn("⚠️ 使用 GEMINI_API_KEY 环境变量，建议使用 GOOGLE_GENERATIVE_AI_API_KEY");
    return process.env.GEMINI_API_KEY;
  }
  return undefined;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // 只允许 POST 请求
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({ error: "Prompt is required" });
  }

  // 从服务器端环境变量读取 API Key（不在客户端暴露）
  const apiKey = getApiKey();

  if (!apiKey) {
    const isLocalDev = process.env.NODE_ENV !== "production";
    const envVars = Object.keys(process.env).filter(key => 
      key.includes('API_KEY') || key.includes('GEMINI') || key === 'API_KEY'
    );
    
    console.error("❌ API Key not found in server environment");
    console.error("🔍 检查的环境变量:", envVars);
    console.error("🔍 NODE_ENV:", process.env.NODE_ENV);
    console.error("🔍 VERCEL:", process.env.VERCEL ? "是" : "否");
    
    return res.status(500).json({ 
      error: isLocalDev 
        ? "API Key 未配置。请创建 .env.local 文件并设置 GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here\n\n获取 API Key: https://makersuite.google.com/app/apikey"
        : `API Key 未配置。\n\n请在 Vercel 项目设置中添加环境变量：\n1. 进入项目 Settings → Environment Variables\n2. 添加变量名：GOOGLE_GENERATIVE_AI_API_KEY\n3. 添加变量值：您的 Gemini API Key\n4. 选择所有环境（Production/Preview/Development）\n5. 保存后重新部署\n\n获取 API Key: https://makersuite.google.com/app/apikey\n\n当前环境变量检查: ${envVars.length > 0 ? envVars.join(', ') : '未找到相关环境变量'}`
    });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-latest" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "You are a travel assistant. Always respond in STRICT JSON format. Do not use Markdown code blocks." }],
        },
      ],
    });

    const result = await chat.sendMessage(`Analyze this travel request: "${prompt}".
      
      Logic Flow:
      1. If specific (e.g., "Japan trip"), set "isAmbiguous": false. Provide "tripSummary" and "destinations".
      2. If vague (e.g., "Beach holiday"), set "isAmbiguous": true. Provide 2 distinct "options".
      
      Output JSON Structure (Follow strictly):
      {
        "isAmbiguous": boolean,
        "options": [{ "id": string, "title": string, "description": string, "highlight": string }],
        "tripSummary": string,
        "destinations": [{ 
           "name": string, 
           "lat": number, 
           "lng": number, 
           "description": string, 
           "suggestedDays": number, 
           "activities": string[] 
        }]
      }
      Respond ONLY with valid JSON. Language: Chinese (Simplified).`);

    const response = await result.response;
    const text = response.text();
    
    // 清理可能存在的 Markdown 格式
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    
    const data = JSON.parse(cleanText);
    
    return res.status(200).json(data);
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ 
      error: error.message || "Failed to generate trip itinerary" 
    });
  }
}

