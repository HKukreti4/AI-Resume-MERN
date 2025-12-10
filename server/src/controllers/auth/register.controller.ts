import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler.utility";
import { ErrorHandler } from "../../utils/errorHandler.utility";
import {  User } from "../../models/user.model";
import { ApiResponse } from "../../utils/ApiResponse.utility";


export const registerUser=asyncHandler(async (req:Request,res:Response,next:NextFunction)=>{
     const {email,password,username}=req.body
     if(!email || !password || !username){
       return  next(new ErrorHandler("All field are required",404))
     }
    const existingUser=await User.findOne({email});
    if(existingUser){
        return next(new ErrorHandler("User already exist",404))
    }
    const user=await  User.create({email,password,username})
    if(!user){
        return next(new ErrorHandler("Failed to create user",404))
    }
    res.status(201).json(new ApiResponse(201,"Registered Succesfully",user))
    
})