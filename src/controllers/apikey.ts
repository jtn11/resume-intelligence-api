import { apikeys } from "../config/apikeys";
import { generateApiKey } from "../utils/apikey";
import { Request, Response } from "express";

export const createApikey = (req: Request, res: Response) => {
  const key = generateApiKey();
  apikeys.set(key, { request: 0 });
  res.status(201).json({
    apikey: key,
  });
};
