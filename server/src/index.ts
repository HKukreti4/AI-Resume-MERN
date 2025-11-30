import dotenv from "dotenv";
import app from "./app";
import { connectDb } from "./config/db.config";
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDb().then(()=>{
 app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
}).catch(()=>{
    console.log("Failed to connect DB");
})




