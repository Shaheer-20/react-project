
import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

export class GeminiService {
  private static instance: GeminiService;
  private ai: GoogleGenAI;
  private chat: Chat | null = null;

  private constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  public static getInstance(): GeminiService {
    if (!GeminiService.instance) {
      GeminiService.instance = new GeminiService();
    }
    return GeminiService.instance;
  }

  public async initChat() {
    this.chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });
  }

  public async sendMessage(message: string): Promise<string> {
    if (!this.chat) {
      await this.initChat();
    }
    
    try {
      const response = await this.chat!.sendMessage({ message });
      return response.text || "I'm having a bit of trouble thinking right now. Could you try again?";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "An error occurred while communicating with my neural circuits.";
    }
  }
}
