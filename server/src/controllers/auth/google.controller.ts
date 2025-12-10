import { Request, Response } from "express";
import { IUser } from "../../models/user.model";
import jwt from "jsonwebtoken"
import { generateAccessAndRefreshToken } from "../../utils/token.utility";


export const googleLogin = async (req: Request, res: Response) => {
  const user = req.user as IUser;
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)
  const options = {
    httpOnly: true,
    secure: true,
    sameSite:"none" as any,
  }
  // Option 1: send token via redirect query
  res.cookie("accessToken", accessToken, options)
  res.cookie("refreshToken", refreshToken, options)
  res.redirect(
    `${process.env.FRONTEND_URL}/dashboard`
  );


}