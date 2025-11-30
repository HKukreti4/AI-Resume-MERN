import mongoose,{Schema,Document} from "mongoose";
import bcrypt from "bcryptjs"
import { NextFunction } from 'express';


export interface IUser extends Document{
    username:string,
    email:string,
    password:string,
    role:"admin"|"user",
    avatar:string
}


const userSchema:Schema<IUser>=new mongoose.Schema<IUser>({
        username:{
            type:String,
            required:true,
            trim:true
        },
        email:{
             type:String,
            required:true,
            trim:true
        },
        password:{
             type:String,
            required:true,
            trim:true
        },
        role:{
            type:String,
            default:"user"
        },
        avatar:{
            type:String,
            default:""
        }
})


userSchema.pre("save",async function(next:any){
    if(!this.isModified("password")){
      return  next()
    }
   this.password= await  bcrypt.hash(this.password,10)
    next()
})


export const userModel=mongoose.model<IUser>("User",userSchema)