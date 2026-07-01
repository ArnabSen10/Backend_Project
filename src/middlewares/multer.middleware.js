import multer from "multer";

//cb is callback
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp") //all the files will be kept here
  },
  filename: function (req, file, cb) { //how we want to save the file name
    cb(null, file.originalname) //originalname means the name kept by the user
  }
})

export const upload = multer(
    {
         storage, 
    })