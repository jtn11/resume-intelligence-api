// src/routes/analyze.ts
import { Router } from "express";
import { analyzeResume } from "../controllers/analyzeResume";
import { createApikey } from "../controllers/apikey";
import { apikeyAuth } from "../middlewares/apikey-middleware";
import { rateLimit } from "../middlewares/ratelimit-middleware";

const router = Router();

router.post("/analyze", apikeyAuth, rateLimit, analyzeResume);
router.post("/apiKey", createApikey);

export default router;
