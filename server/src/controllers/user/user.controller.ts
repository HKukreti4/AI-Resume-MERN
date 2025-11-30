import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler.utility";
import { ErrorHandler } from "../../utils/errorHandler.utility";


export const registerUser=asyncHandler((req:Request,res:Response,next:NextFunction)=>{
     const {email,password,username}=req.body
     if(!email || !password || !username){
        next(new ErrorHandler("All field are required",404))
     }
     
})