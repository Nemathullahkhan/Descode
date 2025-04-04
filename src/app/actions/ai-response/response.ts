"use server";
import { AI_PROMPT } from "@/data/constants";
import OpenAi from "openai";

interface AiResponseProps {
  prompt?: string;
  imageUrl?: string;
}

export default async function getAiResponse({
  imageUrl,
  prompt,
}: AiResponseProps) {
  const openai = new OpenAi({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
    dangerouslyAllowBrowser: false,
  });

  try {
    const systemMessage = AI_PROMPT;
    const userContent = [];
    
    if (prompt) {
      userContent.push({
        type: "text" as const,
        text: prompt,
      });
    }

    if (imageUrl) {
      userContent.push({
        type: "image_url" as const,
        image_url: {
          url: imageUrl,
        },
      });
    }

    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-pro-exp-02-05:free",
      messages: [
        {
          role: "system",
          content: systemMessage,
        },
        {
          role: "user",
          content: userContent,
        },
      ],
    });

    if (!completion?.choices || completion.choices.length === 0) {
      return "No response from AI";
    }
    return completion.choices[0]?.message?.content || "No response";
  } catch (error) {
    console.error("OpenAI error:", error);
    throw new Error("Failed to get AI response");
  }
}
