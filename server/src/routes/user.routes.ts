import express  from "express";
import { registerUser } from "../controllers/auth/register.controller";
import { loginUser } from "../controllers/auth/login.controller";
import passport from './../config/passport.config';
import { IUser } from "../models/user.model";
import jwt from "jsonwebtoken"
import { googleLogin } from "../controllers/auth/google.controller";


const userRoute=express.Router();

userRoute.post("/register",registerUser)
userRoute.post("/login",loginUser)

userRoute.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
userRoute.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.FRONTEND_URL}/login?error=google`,
    session: true,
  }),
  googleLogin
);




export default userRoute;