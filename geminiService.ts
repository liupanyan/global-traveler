// @ts-ignore
import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse, Destination } from "../types";

// ✅ 修复点 1：使用 import.meta.env 读取 Vercel 的环境变量
// @ts-ignore
const apiKey = import.meta.env.VITE_API_KEY;

// ✅ 修复点 2：增加防呆检查，如果没有 Key 会在控制台提示
if (!apiKey) {
  console.error("严重错误: 无法读取 VITE_API_KEY。请检查 Vercel 环境变量设置。");
}

// 初始化 AI
const ai = new GoogleGenAI({ apiKey: apiKey || "" });

// 使用支持 JSON Schema 的最新模型
const MODEL_ID = "gemini-1.5-flash"; 

export const generateTripItinerary = async (prompt: string): Promise<AIResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: MODEL_ID,
      contents: `Analyze this travel request: "${prompt}".
      
      Logic Flow:
      1. If specific (e.g., "Japan trip"), set "isAmbiguous": false. Provide "tripSummary" and "destinations".
      2. If vague (e.g., "Beach holiday"), set "isAmbiguous": true. Provide 2 distinct "options".
      
      Output JSON Schema:
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
      Respond ONLY with valid JSON. Language: Chinese (Simplified).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isAmbiguous: { type: Type.BOOLEAN },
            options: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  highlight: { type: Type.STRING },
                },
                required: ["id", "title", "description", "highlight"],
              },
            },
            tripSummary: { type: Type.STRING },
            destinations: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  lat: { type: Type.NUMBER },
                  lng: { type: Type.NUMBER },
                  description: { type: Type.STRING },
                  suggestedDays: { type: Type.NUMBER },
                  activities: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  }
                },
                required: ["name", "lat", "lng", "description", "suggestedDays", "activities"],
              },
            },
          },
          required: ["isAmbiguous"],
        },
      },
    });

    // 适配新版 SDK 的返回值
    const outputText = response.text ? response.text() : "{}";
    
    // 清理 JSON 格式 (以防 AI 返回 markdown 代码块)
    const cleanText = outputText.replace(/```json/g, '').replace(/```/g, '').trim();

    return JSON.parse(cleanText) as AIResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

export const generateDetailedItinerary = async (optionTitle: string, originalPrompt: string): Promise<AIResponse> => {
    return await generateTripItinerary(`Create a detailed itinerary for: ${optionTitle}. Context: ${originalPrompt}`);
}

export const getSingleDestination = async (name: string): Promise<Omit<Destination, 'id'>> => {
  try {
    const response = await ai.models.generateContent({
      model: MODEL_ID,
      contents: `Get travel info for: "${name}". Return JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            lat: { type: Type.NUMBER },
            lng: { type: Type.NUMBER },
            description: { type: Type.STRING },
            suggestedDays: { type: Type.NUMBER },
            activities: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["name", "lat", "lng", "description", "suggestedDays", "activities"],
        },
      },
    });

    const outputText = response.text ? response.text() : "{}";
    const cleanText = outputText.replace(/```json/g, '').replace(/```/g, '').trim();
    const data = JSON.parse(cleanText);
    
    return {
      name: data.name,
      coordinates: { lat: data.lat, lng: data.lng },
      description: data.description,
      days: data.suggestedDays || 1,
      activities: data.activities || []
    };
  } catch (error) {
    console.error("Gemini Single Dest Error:", error);
    throw error;
  }
};
