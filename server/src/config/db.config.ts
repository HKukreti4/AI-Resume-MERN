import mongoose from "mongoose";

export const connectDb=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`); 
        console.log(`db connectd to ${connectionInstance.connection.host}`) 
    } catch (error) {
    //    console.log(error);
    //    process.exit(1)
        throw error
    }
}