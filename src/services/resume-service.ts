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
    You are a resume Analyser , 
    Analyse the resume against the job description . 

    Resume : ${resumeText}

    Job Description : ${jobDescription}

    Return only valid JSON with : 
    - matchScore (number) 
    - strengths (string[])
    - missing skills (string[])
    - suggestions (string[])
    `;

  const rawResponse = await llm.analyze(prompt);

  let parsed;
  try {
    parsed = JSON.parse(rawResponse);
  } catch (error) {
    throw new ApiError(500, "Invalid Response format");
  }

  return parsed;
};
