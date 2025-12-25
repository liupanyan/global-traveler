import { GoogleGenerativeAI } from "@google/generative-ai";
import { AIResponse, Destination } from "./types";

// 1. 读取 API Key
const apiKey = import.meta.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY;

if (!apiKey) {
  console.error("Missing API Key. Please check Vercel Environment Variables.");
  console.error("Environment variable name must be: VITE_GOOGLE_GENERATIVE_AI_API_KEY");
}

// 2. 初始化稳定版 SDK
const genAI = new GoogleGenerativeAI(apiKey || "");

// 使用最新的 gemini-2.5-flash-latest 模型
const MODEL_NAME = "gemini-2.5-flash-latest";

const model = genAI.getGenerativeModel({ model: MODEL_NAME });

export const generateTripItinerary = async (prompt: string): Promise<AIResponse> => {
  // 检查 API Key
  if (!apiKey) {
    throw new Error("API Key 未配置。请在 Vercel 环境变量中设置 VITE_GOOGLE_GENERATIVE_AI_API_KEY。");
  }

  try {
    // 3. 使用 chat 模式以获得更稳定的 JSON 输出
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
    
    // 4. 清理可能存在的 Markdown 格式
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    
    return JSON.parse(cleanText) as AIResponse;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    // 如果是模型未找到错误，提供更友好的提示
    if (error?.message?.includes("not found") || error?.message?.includes("404")) {
      throw new Error("模型不可用。请检查 API Key 是否正确，或尝试使用其他模型。错误详情：" + error.message);
    }
    throw error;
  }
};

export const generateDetailedItinerary = async (optionTitle: string, originalPrompt: string): Promise<AIResponse> => {
    return await generateTripItinerary(`Create a detailed itinerary for: ${optionTitle}. Context: ${originalPrompt}`);
}

export const getSingleDestination = async (name: string): Promise<Omit<Destination, 'id'>> => {
  // 检查 API Key
  if (!apiKey) {
    throw new Error("API Key 未配置。请在 Vercel 环境变量中设置 VITE_GOOGLE_GENERATIVE_AI_API_KEY。");
  }

  try {
    const result = await model.generateContent(`Get travel info for: "${name}". 
    Return JSON: { "name": string, "lat": number, "lng": number, "description": string, "suggestedDays": number, "activities": string[] }`);
    
    const response = await result.response;
    const text = response.text();
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const data = JSON.parse(cleanText);
    
    return {
      name: data.name,
      coordinates: { lat: data.lat, lng: data.lng },
      description: data.description,
      days: data.suggestedDays || 1,
      activities: data.activities || []
    };
  } catch (error: any) {
    console.error("Gemini Single Dest Error:", error);
    // 如果是模型未找到错误，提供更友好的提示
    if (error?.message?.includes("not found") || error?.message?.includes("404")) {
      throw new Error("模型不可用。请检查 API Key 是否正确，或尝试使用其他模型。错误详情：" + error.message);
    }
    throw error;
  }
};
