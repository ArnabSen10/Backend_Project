import { asyncHandler } from "../utils/asyncHandler.js"

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ //also adding a json response
        message: "ok"
    })
})

export {registerUser}