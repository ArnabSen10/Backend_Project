//in user model we don't write the id as when mongoDB saves user in database it gives an id to the user
//also if any image or videos are there we will upload it into a third party and in the database we will just store the url of the images which is of string type

import mongoose, {Schema} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
         username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true //to make this field searchable
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }
        
    },
    {
        timestamps: true
    }
)

//there are hooks in middlewares like pre, post
// for eg in "pre" just before the data gets saved we can use the pre hook and execute as per our wish like authenticating a user before saving the dat in the database
//encrypting the password

userSchema.pre("save", async function(next) {
    //if we dont write this check condition then for every click on save like if we change the avatar then also the password will be changed, so the below check condition is neccesary
    if(!this.isModified("password")) 
        return next();
    
    this.password = bcrypt.hash(this.password, 10) //10 is rounds or salt
    next()
})
// we don;'t use arrow function here because if we use arrow function then we will not get the referrence (this)

//mongoose also allows us to  create our own methods
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password) //bcrypt has method that checks weather the password entered by the user is valid or not
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)