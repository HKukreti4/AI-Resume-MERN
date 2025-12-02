import mongoose,{Schema,Document} from "mongoose";
import bcrypt from "bcryptjs"



export interface IUser extends Document{
    username:string,
    email:string,
    password:string | null,
    role:"admin"|"user",
    avatar:string,
    loginType:"google"|"custom"| "both",
    googleId:string | null,
    comparePass(password:string):Promise<boolean>
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

export const userModel=mongoose.model<IUser>("User",userSchema)