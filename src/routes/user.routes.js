import { Router } from "express";
import { loginUser, logOutUser, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([ //this is the middlewares
        {
            name: "avatar", //the first file that we will upload while registering a user and the name of the file is "avatar" and should be same in frontend also
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser //before executing this function the middlewares condition will be fulfilled
)

router.route("/login").post(loginUser)
router.route("logout").post(verifyJWT, logOutUser)

export default router