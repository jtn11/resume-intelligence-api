import { ApiError } from "../utils/ApiError";
import { getllmProvider } from "./llm/llm-factory";

export const analyzeResumeService = async (
  resumeText: string,
  jobDescription: string,
) => {
  if (!resumeText || !jobDescription) {
    throw new ApiError(400, "resume Text and jobDescription required");
  }

  const llm = getllmProvider();

  const prompt = ` 
            You are an automated Resume Intelligence Engine.

            Your task is to compare a candidate's resume with a job description
            and return a structured evaluation.

            RULES (STRICT):
            - Return ONLY valid JSON
            - Do NOT include markdown, explanations, or extra text
            - Do NOT wrap the response in backticks
            - All arrays must contain strings only
            - Skills must be short, normalized skill names (e.g., "React", "Node.js")

            SCORING:
            - matchScore must be an integer between 0 and 100
            - Score represents how well the resume matches the job description

            ANALYSIS GUIDELINES:
            - strengths: skills clearly present in the resume AND relevant to the job description
            - missingSkills: skills required by the job description but NOT found in the resume
            - suggestions: short, actionable improvements for the resume

            IF NO MEANINGFUL MATCH EXISTS:
            - matchScore should be low (0–30)
            - strengths may be empty
            - missingSkills should list major required skills

            INPUT:
            Resume:
            ${resumeText}

            Job Description:
            ${jobDescription}

            OUTPUT FORMAT (JSON ONLY):
            {
            "matchScore": number,
            "strengths": string[],
            "missingSkills": string[],
            "suggestions": string[]
            }`;

  const rawResponse = await llm.analyze(prompt);

  let parsed;
  try {
    parsed = JSON.parse(rawResponse);
  } catch (error) {
    throw new ApiError(500, "Invalid Response format");
  }

  return parsed;
};
