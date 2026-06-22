import dotenv from "dotenv";
//import dotenv as early as possible so that the environment variables become available to all the files as soon as the app starts

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env' //.env is present in parent directory
})


connectDB()


/*
// 1st Approach
//writing iife function

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }
    catch (error){
        console.error("ERROR: ", error);
        throw error
    }
}) ()

*/