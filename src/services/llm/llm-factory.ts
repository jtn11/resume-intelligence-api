import { GroqProvider } from "../llm-service/groq-provider";
import { LLMProvider } from "../llm-service/llm-interface";

export const  getllmProvider = () : LLMProvider =>{
    return new GroqProvider();
}