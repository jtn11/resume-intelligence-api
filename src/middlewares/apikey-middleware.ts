import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { apikeys } from "../config/apikeys";

export const apikeyAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    throw new ApiError(401, "Api key missing");
  }

  const apiKey = authHeader.split(" ")[1];
  const keydata = apikeys.get(apiKey);

  if (!keydata) {
    throw new ApiError(403, "Invalid api key");
  }

  next();
};
