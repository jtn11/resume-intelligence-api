// src/routes/analyze.ts
import { Router } from "express";
import { analyzeResume } from "../controllers/analyzeResume";
import { createApikey } from "../controllers/apikey";
import { apikeyAuth } from "../middlewares/apikey-middleware";

const router = Router();

router.post("/analyze", apikeyAuth, analyzeResume);
router.post("/apiKey", createApikey);

export default router;
