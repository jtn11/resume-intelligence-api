import { NextFunction , Request , Response  } from "express";
import { ApiError } from "../utils/ApiError";

export const errorHandler = (err : Error , req : Request , res: Response , next : NextFunction)=>{
    if(err instanceof ApiError){
        return res.status(err.statusCode).json({
            error : err.message , 
        })
    } 
    console.error(err) ; 

    return res.status(500).json({
    error: "Internal server error",
  });
};
