import { LLMProvider } from "./llm-interface";

export class GroqProvider implements LLMProvider {
  async analyze(prompt: string): Promise<string> {
    return JSON.stringify({
      matchScore: 82,
      strengths: ["React", "Node.js"],
      missingSkills: ["Docker"],
      suggestions: ["Add Docker experience"],
    });
  }
}
