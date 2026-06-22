import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        //mongoose returs a object and can be stored in a variable
        console.log(`MongoDB Connected!!!!! DB Host ${connectionInstance.connection.host}`);
    }

    catch(error){
        console.log("MongoDB connection ERROR: ",error);
        process.exit(1);
        //the current application that is running it is running on a process and process is the reference of that application
    }
}

export default connectDB