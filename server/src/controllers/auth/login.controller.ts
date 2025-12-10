import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler.utility";
import { ErrorHandler } from "../../utils/errorHandler.utility";
import { IUser, User } from "../../models/user.model";
import { ApiResponse } from "../../utils/ApiResponse.utility";
import { generateAccessAndRefreshToken } from "../../utils/token.utility";






export const loginUser=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
        const {email,password}=req.body;

        if(!email || !password){
            return next(new ErrorHandler("Email or password is required",401))
        }
        const user:IUser=await User.findOne({email}).select("+password")

        if(!user){
            return next(new ErrorHandler("Invalid Credentials",404))
        }
        const isPassCorrect= await user.comparePass(password)
        if(!isPassCorrect){
            return next(new ErrorHandler("Invalid Credentails",404))
        }
        const {accessToken,refreshToken}=await generateAccessAndRefreshToken(user._id)
        const options={
            secure:true,
            httpOnly:true
        }
        res.cookie("accessToken",accessToken,options)
        res.cookie("refreshToken",refreshToken,options)
        res.status(200).json(new ApiResponse(200,"Login Successfull",{user:user,accessToken,refreshToken}))
        
})

