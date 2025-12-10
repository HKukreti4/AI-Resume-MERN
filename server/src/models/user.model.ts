import mongoose,{Schema,Document} from "mongoose";
import bcrypt from "bcryptjs"
import  jwt, { SignOptions }  from 'jsonwebtoken';
import dotenv from "dotenv"
dotenv.config()

export interface IUser extends Document{
    username:string,
    email:string,
    password:string | null,
    role:"admin"|"user",
    avatar:string,
    loginType:"google"|"custom"| "both",
    googleId:string | null,
    comparePass(password:string):Promise<boolean>,
     generateAccessToken(): string;
    generateRefreshToken(): string;
    
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
            unique:true,
            trim:true
        },
        password:{
             type:String,
             trim:true,
             select: false,
             required: function(this: IUser) {
            return this.loginType !== "google";
        },
        },
        role:{
            type:String,
            default:"user"
        },
        avatar:{
            type:String,
            default:""
        },
        loginType:{
            type:String,
            default:"custom",
            enum: ["google", "custom", "both"]
        },
        googleId:{
            type:String,
            default:null
        },
})


userSchema.pre("save",async function(){
    if(this.isModified("password") && this.password){
        this.password= await  bcrypt.hash(this.password,10)
    }
})


userSchema.methods.comparePass=async function(password:string){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function (): string {
  const payload = {
    _id: this._id.toString(),
  };

  const options: SignOptions = {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY as SignOptions["expiresIn"]
  };

  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, options);
};

// method to generate access token and refresh token 
userSchema.methods.generateRefreshToken = function (): string {
  const payload = {
    _id: this._id.toString(),
  };

  const options: SignOptions = {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY as SignOptions["expiresIn"]
  };

  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string, options);
};

export const User=mongoose.model<IUser>("User",userSchema)