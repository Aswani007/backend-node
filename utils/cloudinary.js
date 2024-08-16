//using cloudinary for uploading file
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

//configuration of cloudinary
cloudinary.config({
  cloud_name: "di3cay01v",
  api_key: "519715156599551",
  api_secret: "wsF2nyNwFQ9EXuzBV1FbPXYCgzI",
});

//upload file on cloudinary
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    //file has been uploaded successfully
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.error(error);
    fs.unlinkSync(localFilePath); //remove locally saved temporary file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
