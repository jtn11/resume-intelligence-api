import { NextFunction, RequestHandler , Request , Response} from "express";
import { analyzeResumeService } from "../services/resume-service";

export const analyzeResume : RequestHandler = async(req : Request , res : Response , next : NextFunction)=>{

    try {
        const {resumeText , jobDescription} = req.body; 
        const result = await analyzeResumeService(resumeText , jobDescription)

        res.status(200).json(result);

    } catch (error) {
        next(error)
    }
}