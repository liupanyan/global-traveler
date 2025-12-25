import { AIResponse, Destination } from "./types";

// API 路由地址（通过 Vercel Serverless Functions 调用，API Key 在服务器端）
const API_BASE_URL = "/api";

export const generateTripItinerary = async (prompt: string): Promise<AIResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/generate-trip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
      throw new Error(errorData.error || `API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data as AIResponse;
  } catch (error: any) {
    console.error("API Error:", error);
    if (error.message?.includes("API Key")) {
      throw new Error("API Key 未配置。\n\n请检查：\n1. Vercel 环境变量名称：GOOGLE_GENERATIVE_AI_API_KEY\n2. 已选择所有环境（Production/Preview/Development）\n3. 已保存并重新部署");
    }
    throw error;
  }
};

export const generateDetailedItinerary = async (optionTitle: string, originalPrompt: string): Promise<AIResponse> => {
    return await generateTripItinerary(`Create a detailed itinerary for: ${optionTitle}. Context: ${originalPrompt}`);
}

export const getSingleDestination = async (name: string): Promise<Omit<Destination, 'id'>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/get-destination`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
      throw new Error(errorData.error || `API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data as Omit<Destination, 'id'>;
  } catch (error: any) {
    console.error("API Error:", error);
    if (error.message?.includes("API Key")) {
      throw new Error("API Key 未配置。\n\n请检查：\n1. Vercel 环境变量名称：GOOGLE_GENERATIVE_AI_API_KEY\n2. 已选择所有环境（Production/Preview/Development）\n3. 已保存并重新部署");
    }
    throw error;
  }
};
