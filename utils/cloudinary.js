import {v2 as cloudinary} from "cloudinary"
import {CLOUD_NAME,APY_KEY,APY_SECRET} from "../config.js"

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: APY_KEY,
  api_secret: APY_SECRET,
  secure:true
})
export async function uploadImage(filePath){
  return await cloudinary.uploader.upload(filePath,{
    folder:'replit'
  })
}
export async function deleteImage(publicId) {
  return await cloudinary.uploader.destroy(publicId)
}