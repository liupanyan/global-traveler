import { GoogleGenAI, Type, SchemaType } from "@google/genai";
import { AIResponse, Destination } from "../types";

// Initialize Gemini Client
// FIX: 使用 Vite 标准的 import.meta.env 读取环境变量
const apiKey = import.meta.env.VITE_API_KEY;

if (!apiKey) {
  console.error("Missing API Key: VITE_API_KEY is not set.");
  // 可以在这里抛出错误或者给一个用户友好的提示
}

const ai = new GoogleGenAI({ apiKey: apiKey || "" });

const MODEL_ID = "gemini-2.0-flash-exp"; 
// 或者用 "gemini-1.5-flash" 等其他可用模型

export const generateTripItinerary = async (prompt: string): Promise<AIResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: MODEL_ID,
      contents: `Analyze this travel request: "${prompt}".
      
      Logic Flow:
      1. If the user specifies a specific country, city, or region (e.g., "Japan trip", "Paris itinerary"), set "isAmbiguous" to FALSE.
         Provide a "tripSummary" and a detailed list of "destinations". 
         For each destination, provide a rich description and a list of 3-5 specific "activities" or attractions (e.g., "Visit the Louvre", "Walk along the Seine").
      2. If the user request is VAGUE (e.g., "Beach holiday", "Somewhere cheap in August", "European summer"), set "isAmbiguous" to TRUE.
         In this case, provide exactly 2 distinct "options". Do NOT provide "destinations" yet.
      
      Output Language: Chinese (Simplified).
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            isAmbiguous: { type: SchemaType.BOOLEAN },
            options: {
              type: SchemaType.ARRAY,
              description: "Provide exactly 2 options if request is ambiguous.",
              items: {
                type: SchemaType.OBJECT,
                properties: {
                  id: { type: SchemaType.STRING },
                  title: { type: SchemaType.STRING, description: "e.g., '浪漫巴厘岛之旅' vs '普吉岛活力游'" },
                  description: { type: SchemaType.STRING, description: "Brief overview of why this option fits." },
                  highlight: { type: SchemaType.STRING, description: "Key attraction." },
                },
                required: ["id", "title", "description", "highlight"],
              },
            },
            tripSummary: {
              type: SchemaType.STRING,
              description: "Only if specific. A brief, exciting summary.",
            },
            destinations: {
              type: SchemaType.ARRAY,
              description: "Only if specific.",
              items: {
                type: SchemaType.OBJECT,
                properties: {
                  name: { type: SchemaType.STRING, description: "Name in Chinese" },
                  lat: { type: SchemaType.NUMBER, description: "Latitude" },
                  lng: { type: SchemaType.NUMBER, description: "Longitude" },
                  description: { type: SchemaType.STRING, description: "A detailed, engaging description (2-3 sentences) of the destination." },
                  suggestedDays: { type: SchemaType.NUMBER, description: "Recommended duration in days" },
                  activities: {
                    type: SchemaType.ARRAY,
                    description: "List of 3-5 top activities/sights.",
                    items: { type: SchemaType.STRING }
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

    const text = response.text(); // 注意：新版 SDK 有时需要用方法调用，或者用 response.text 属性，视版本而定。
    // 如果 response.text 是属性则保留原来的写法，如果是方法则加 ()。通常 0.1.1 版本可能是属性。
    // 安全起见，保留你原来的写法:
    const outputText = typeof response.text === 'function' ? response.text() : response.text;

    if (!outputText) throw new Error("No response from AI");

    return JSON.parse(outputText) as AIResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

export const generateDetailedItinerary = async (optionTitle: string, originalPrompt: string): Promise<AIResponse> => {
    try {
      return await generateTripItinerary(`Create a detailed itinerary for: ${optionTitle}. Context: ${originalPrompt}`);
    } catch (error) {
      console.error("Gemini Detail Error:", error);
      throw error;
    }
}

export const getSingleDestination = async (name: string): Promise<Omit<Destination, 'id'>> => {
  try {
    const response = await ai.models.generateContent({
      model: MODEL_ID,
      contents: `Get travel information for the location: "${name}". 
      Return its accurate coordinates, a rich 2-sentence description in Chinese, suggested days to visit, and 3-4 key activities.
      If the location is ambiguous, choose the most popular tourist destination with that name.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            name: { type: SchemaType.STRING, description: "Standardized name in Chinese" },
            lat: { type: SchemaType.NUMBER },
            lng: { type: SchemaType.NUMBER },
            description: { type: SchemaType.STRING },
            suggestedDays: { type: SchemaType.NUMBER },
            activities: {
              type: SchemaType.ARRAY,
              items: { type: SchemaType.STRING }
            }
          },
          required: ["name", "lat", "lng", "description", "suggestedDays", "activities"],
        },
      },
    });

    const outputText = typeof response.text === 'function' ? response.text() : response.text;
    if (!outputText) throw new Error("No response from AI");
    
    const data = JSON.parse(outputText);
    
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