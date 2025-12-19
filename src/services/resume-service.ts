import { ApiError } from "../utils/ApiError"

export const analyzeResumeService = async (resumeText : string , jobDescription : string)=>{

    if(!resumeText || !jobDescription) {
        throw new ApiError(400 , "resume Text and jobDescription required"); 
    }

    return ({
        matchScore : 70 , 
        strengths : ["webDev" , "Agentic AI"],
        missingSkills : ["python"], 
        suggestions : ["Add experince to resume"]
    })
}