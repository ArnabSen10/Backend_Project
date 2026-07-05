import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; //to access the cookies of the user's browser and also set them

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN, //origin is defining from where we will receive the request
    credentials: true
}))

//handling the data that will be coming
app.use(express.json({limit:"16kb"})) //in this the data that is coming from filling the form

//this configuration is for the data that is coming from the url
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public")) //to store any images, pdfs in my server
app.use(cookieParser())

//routes import
import userRouter from './routes/user.routes.js'
//routes declaration
app.use("/users", userRouter)
//"http://localhost:8000/users/register"

export { app }