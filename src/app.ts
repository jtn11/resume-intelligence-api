import express from "express";
import analyzeRouter from "./routes/analyze";
import { errorHandler } from "./middlewares/error-middleware";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "Resume Intelligence API",
    version: "1.0.0",
  });
});

app.use("/api", analyzeRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
