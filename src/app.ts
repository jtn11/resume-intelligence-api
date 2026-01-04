import express from "express";
import analyzeRouter from "./routes/analyze";
import { errorHandler } from "./middlewares/error-middleware";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/api", analyzeRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("server running on 8000");
});
