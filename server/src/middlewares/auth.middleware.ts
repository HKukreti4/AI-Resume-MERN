import { asyncHandler } from "../utils/asyncHandler.utility";
import { NextFunction, Request,Response } from 'express';
import { ErrorHandler } from "../utils/errorHandler.utility";
import { IUser, User } from "../models/user.model";
interface UserReq extends Request{
    user:IUser
}
export const verifyJWT=asyncHandler(async (req:UserReq,res:Response,next:NextFunction)=>{
    
    const jwt=req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ","")
    if(!jwt){
        next(new ErrorHandler("Unauthorized User",404))
    }
    const decoded=jwt.verify(jwt,process.env.ACCESS_TOKEN_SECRET)
    if(!decoded){
      return  next(new ErrorHandler("Token expired or used",401))
    }
    const user=await User.findById(decoded._id)
    if(!user){
      return  next(new ErrorHandler("Token is not valid or user does not exits"))
    }
    req.user=user
    next()
})