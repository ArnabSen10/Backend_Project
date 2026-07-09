//goal is to take the file from local server and upload it to cloudinary and then remove from local server
import { v2 as cloudinary} from "cloudinary";
import fs from "fs" 
//fs is file system library it comes with node; this libraray helps to read write remove a file.

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        //if no file is uploaded in local server
        if (!localFilePath) return null 
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto" //image or video or pdf 
        })
        // file has been uploaded successfully
        // console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export {uploadOnCloudinary}