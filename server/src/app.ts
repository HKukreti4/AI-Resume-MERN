import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/error.middleware";

import cookieParser from "cookie-parser";

import { fileURLToPath } from "url";
import path from "path";
import userRoute from "./routes/user.routes";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app: Application = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

//  Routes
app.use("/api/v1/user",userRoute);




app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Server is running" });
});


app.use(errorMiddleware)
export default app;
