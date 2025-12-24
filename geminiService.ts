import { GoogleGenerativeAI } from "@google/generative-ai";
import { AIResponse, Destination } from "./types";

// 1. 读取 API Key
const apiKey = import.meta.env.VITE_API_KEY;

if (!apiKey) {
  console.error("Missing API Key. Please check Vercel Environment Variables.");
}

// 2. 初始化稳定版 SDK
const genAI = new GoogleGenerativeAI(apiKey || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateTripItinerary = async (prompt: string): Promise<AIResponse> => {
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
  } catch (error) {
    console.error("Gemini Single Dest Error:", error);
    throw error;
  }
};
