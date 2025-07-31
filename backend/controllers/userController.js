import { userModel } from "../models/userModel.js"
import apiError from "../utils/apiError.js"
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import apiResponse from "../utils/apiResponse.js"

dotenv.config()


const createToken=(id)=>{
   return jwt.sign({id}, process.env.JWT_SECRET)


}

const loginUser=async(req,res)=>{

}

const registerUser=async(req,res)=>{
  console.log("Inside register user function")
   const {name,email,password}=req.body
   console.log(name,email)

   if(!name||!email||!password)
      throw new apiError(400,"All fields required")

   const existedUser=await userModel.findOne(
      {$or:[{name},{email}]}
   )
   console.log(existedUser)

   if(existedUser)
      throw new apiError(400,"User already exists")

   if(!validator.isEmail(email))
      throw new apiError(400,"Enter valid email")

   if(password.length<6)
      throw new apiError(400,"password lenght must be  atleast 6")

   const hashedPassword=await bcrypt.hash(password,10)

   const newUser=new userModel({
      name,
      email,
      password:hashedPassword
   })

   const user=await newUser.save()

   const token=createToken(user._id)

   if(!token)
      throw new apiError(500,"token generation failed")

   const createdUser=await userModel.findById(user._id).select("-password")

   if(!createdUser)
      throw new apiError(500,"User registration failed")

   return res.status(200).json(new apiResponse(200,{createdUser,token},"User created successfully"))


   

   

}

const adminLogin=async(req,res)=>{

}

export {loginUser,registerUser,adminLogin}