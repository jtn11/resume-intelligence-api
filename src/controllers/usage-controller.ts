import { Request, Response } from "express";
import { apikeys } from "../config/apikeys";
import { ApiError } from "../utils/ApiError";

export const getUsage = (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new ApiError(401, "Api key missing");
  const apikey = authHeader.split(" ")[1];

  const keydata = apikeys.get(apikey);
  const usage = keydata?.request;

  res.json({
    requestsUsed: usage,
  });
};
