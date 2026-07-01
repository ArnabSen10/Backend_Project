This is a backend Project

we cannot push empty folders to git so we make .gitkeep to push them in git repo

nodemon - whenever a file is saved it restarts te server automatically

dev dependancy means while development we are using it and not in the production

prettier extension and also its settings are used as in one code many developers works so when the code is merged there conflict arises in syntax spacing like these, so that all emains on the same shore we use prettier
"singleQuote": false,
"bracketSpacing": true,

Database Connection
//atlas is a sub-service of mongodb that allows user to have databases online
//in ip address mostly access is given to the ip address of that particular system where all the backend code is ther, but for practice we give 0.0.0.0/0 i.e. allow from all devices

there are two ways to connect to database
first is always we will run the code with index.js, so we keep all the the codes in index.js and when the code loads the function where the database copnnection code is written it gets executed instantly

secondly, we can create a db folder conssiting of the databse connection code and then we import it in index.js file and execute, it is much cleaner, modular, and effective also
for db connection we use mongoose, and while doing database connection there may occur problem so always wrap it in try and catch block
and also it takes time to talk with the database so we also have to use async

<!-- import mongoose from "mongoose";
import { DB_NAME } from "./constants";

//writing iife function

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }
    catch (error){
        console.error("ERROR: ", error);
        throw error
    }
}) () -->

we also need to load the env file before starting the app so make changes in the script of package.json file so that all the env variables is available

//we use app.use >>wheneever we want to do configuration or middleware settings like cors

Middlewares
(It's like a person telling the other "before going somewhere, meet me")
suppose there is a request /instagram then we have been doing the response will look like res.send("Arnab") i.e. when request comes we serve them with response but we want to process something in between like wheather the user is loggedin or not this checking is called middleware.
(err, req, res, next)  next is a flag that marks wheather the current middleware has completed it's checking or not.



error handling is done in node js by extending the Error class in utils/apiError.js
similarly to handle the response we need express framework

we download the package npm i mongoose-aggregate-paginate-v2 so that we can write aggregation code, complex mongoDB queries

bcrypt library helps us to hash our password (used in user.model.js)

jwt has three parts header, payload(data), verify signature, it  makes all the tokens unique.
JWT is a bearer token. Whosoever has the jwt token i will send them data

File Upload
File uploading is handled by backend, and file handling is done in own's server it is done in 3rd party services like AWS. It depends ypon how much big file is handled, rate of using the services.
Not at all api endpoints the file will come for eg in login, file will not come but during user registration, file may come. We keep it in util so that it remainbs standalone and can be reused.
//We will upload the files in Cloudinary (it is a service)
//two packages are required one is multer
with the help of multer we will take the file from user and store in our local server temporarily, and in next step we will take the file from local storage and put it in coludinary's server. The reason behind storing the file in local server temporarily so that we can attempt re uploading if any such cases occurs. 