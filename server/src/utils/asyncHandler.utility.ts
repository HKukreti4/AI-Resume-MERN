import type { NextFunction,Request,Response } from "express"


export  const asyncHandler=(fn:Function)=>async(req:Request,res:Response,next:NextFunction)=>{
      try {
        await fn(req,res,next)
      } catch (error) {
        console.log(error);
        next(error)
      }  
}