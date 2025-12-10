import { Types } from "mongoose"
import { User } from "../models/user.model"
import { ErrorHandler } from "./errorHandler.utility"

type TokenResponse={
    accessToken:string,
    refreshToken:string
}
export const generateAccessAndRefreshToken=async (userId:Types.ObjectId | string)
:Promise<TokenResponse> =>{
        try {
           
            const user=await User.findById(userId)
           
            if (!user) {
            throw new ErrorHandler("User not found", 404);
            }
            const accessToken=user?.generateAccessToken()
            const refreshToken=user?.generateRefreshToken()

            return {accessToken,refreshToken};
        } catch (error) {
            console.log(error);
             throw new ErrorHandler("Failed to generate tokens",500)
        }
}