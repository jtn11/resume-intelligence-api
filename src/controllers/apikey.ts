import { apikeys } from "../config/apikeys";
import { generateApiKey } from "../utils/apikey";
import { Request, Response } from "express";

export const createApikey = (req: Request, res: Response) => {
  const MAX_Limit = 50;
  const key = generateApiKey();
  apikeys.set(key, {
    request: 0,
    windowStart: Date.now(),
    totalUsed: 0,
    maxLimit: MAX_Limit,
  });
  res.status(201).json({
    apikey: key,
  });
};
