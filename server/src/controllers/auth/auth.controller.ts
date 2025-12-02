import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler.utility";
import { ErrorHandler } from "../../utils/errorHandler.utility";
import { IUser, userModel } from "../../models/user.model";
import { ApiResponse } from "../../utils/ApiResponse.utility";


export const registerUser=asyncHandler(async (req:Request,res:Response,next:NextFunction)=>{
     const {email,password,username}=req.body
     if(!email || !password || !username){
       return  next(new ErrorHandler("All field are required",404))
     }
    const existingUser=await userModel.findOne({email});
    if(existingUser){
        return next(new ErrorHandler("User already exist",404))
    }
    const user=await  userModel.create({email,password,username})
    if(!user){
        return next(new ErrorHandler("Failed to create user",404))
    }
    res.status(201).json(new ApiResponse(201,"Registered Succesfully",user))

})



export const loginUser=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
        const {email,password}=req.body;

        if(!email || !password){
            return next(new ErrorHandler("Email or password is required",401))
        }
        const user:IUser=await userModel.findOne({email}).select("+password")

        if(!user){
            return next(new ErrorHandler("Invalid Credentials",404))
        }
        const isPassCorrect= await user.comparePass(password)
        if(!isPassCorrect){
            return next(new ErrorHandler("Invalid Credentails",404))
        }
        res.status(200).json(new ApiResponse(200,"Login Successfull",user))

        
})