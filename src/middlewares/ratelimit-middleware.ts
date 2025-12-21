import { NextFunction, Request, Response } from "express";
import { apikeys } from "../config/apikeys";
import { ApiError } from "../utils/ApiError";
const MaxRequest = 10;
const Window_MS = 60 * 1000;

export const rateLimit = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const apiKey = authHeader?.split(" ")[1];

  if (!apiKey) {
    throw new ApiError(401, "Api key not present");
  }

  const keyData = apikeys.get(apiKey);
  if (!keyData) {
    throw new ApiError(401, "Invalid API key");
  }
  const now = Date.now();

  if (now - keyData?.windowStart! > Window_MS) {
    keyData.windowStart = now;
    keyData.request = 0;
  }

  if (keyData.request >= MaxRequest) {
    throw new ApiError(429, "Api limit exceeded. Try again later");
  }

  keyData.request += 1;

  next();
};
