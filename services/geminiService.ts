import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateChatResponse = async (message: string, history: { role: 'user' | 'model'; parts: { text: string }[] }[] = []) => {
  try {
    const model = 'gemini-3-flash-preview';
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction: "You are Kam Tech's helpful AI assistant. You help users navigate the marketplace, explain services, and provide support. Keep answers concise and friendly.",
      },
      history,
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
};

export const analyzeImage = async (base64Image: string, prompt: string = "Analyze this image and tell me what service might be needed.") => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: {
        parts: [
          { inlineData: { mimeType: 'image/png', data: base64Image } },
          { text: prompt }
        ]
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Vision Error:", error);
    return "I couldn't analyze that image.";
  }
};
