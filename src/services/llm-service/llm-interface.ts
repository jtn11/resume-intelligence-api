export interface LLMProvider {
  analyze(prompt: string): Promise<string>;
}
