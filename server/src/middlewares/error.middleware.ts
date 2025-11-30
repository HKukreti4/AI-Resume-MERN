// middlewares/errorMiddleware.ts
import type { Request, Response, NextFunction } from "express";
import type { ErrorHandler } from "../utils/errorHandler.utility.ts";


export const errorMiddleware = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
  });
};


