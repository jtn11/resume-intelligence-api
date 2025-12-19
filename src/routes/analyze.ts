// src/routes/analyze.ts
import { Router } from "express";
import { analyzeResume } from "../controllers/analyzeResume";

const router = Router();

router.post("/analyze", analyzeResume);


export default router;
