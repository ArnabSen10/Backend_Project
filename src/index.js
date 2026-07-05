import dotenv from "dotenv";
//import dotenv as early as possible so that the environment variables become available to all the files as soon as the app starts

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import connectDB from "./db/index.js";
import {app} from './app.js';

dotenv.config({
    path: './env' //.env is present in parent directory
})


connectDB() //it returns a promise so we need to handle it with then and catch
.then(() => { //if database is connected then start the server
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
}) 
.catch((err) => {
    console.log("MongoDB Connection Failed !!!", err);
})


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