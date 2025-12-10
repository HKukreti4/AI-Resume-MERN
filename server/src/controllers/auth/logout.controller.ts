import { asyncHandler } from "../../utils/asyncHandler.utility";
import { NextFunction, Request, Response } from 'express';

const logoutUser=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
        res.clearCookie("accessToken")
        res.clearCookie("refreshToken")
})