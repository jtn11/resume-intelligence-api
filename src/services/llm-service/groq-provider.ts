import Groq from "groq-sdk";
import { LLMProvider } from "./llm-interface";

export class GroqProvider implements LLMProvider {
  private client = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  async analyze(prompt: string): Promise<string> {
    const completion = await this.client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are a resume analysis engine." },
        { role: "user", content: prompt },
      ],
      temperature: 0.3,
    });

    return completion.choices[0].message.content || "";
  }
}
