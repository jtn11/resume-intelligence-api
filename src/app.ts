// src/index.ts
import express from "express";
import analyzeRouter from "./routes/analyze";
import { errorHandler } from "./middlewares/error-middleware";

const app = express();

app.use(express.json());

// Mount router
app.use("/api", analyzeRouter);

app.use(errorHandler);

app.listen(8000, () => {
  console.log("server running on 8000");
});
