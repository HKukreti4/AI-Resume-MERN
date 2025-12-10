import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/error.middleware";
import cookieParser from "cookie-parser";
import passport from "./config/passport.config"
import { fileURLToPath } from "url";
import path from "path";
import userRoute from "./routes/user.routes";
import session from "express-session";
dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Application = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


//  Routes
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false, 
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1/auth",userRoute);




app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Server is running" });
});


app.use(errorMiddleware)
export default app;
