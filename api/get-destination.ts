import { GoogleGenerativeAI } from "@google/generative-ai";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // 只允许 POST 请求
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "Destination name is required" });
  }

  // 从服务器端环境变量读取 API Key
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

  if (!apiKey) {
    console.error("❌ GOOGLE_GENERATIVE_AI_API_KEY not found in server environment");
    return res.status(500).json({ 
      error: "API Key not configured on server. Please set GOOGLE_GENERATIVE_AI_API_KEY in Vercel environment variables." 
    });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const result = await model.generateContent(`Get travel info for: "${name}". 
    Return JSON: { "name": string, "lat": number, "lng": number, "description": string, "suggestedDays": number, "activities": string[] }`);
    
    const response = await result.response;
    const text = response.text();
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const data = JSON.parse(cleanText);
    
    return res.status(200).json({
      name: data.name,
      coordinates: { lat: data.lat, lng: data.lng },
      description: data.description,
      days: data.suggestedDays || 1,
      activities: data.activities || []
    });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ 
      error: error.message || "Failed to get destination info" 
    });
  }
}

