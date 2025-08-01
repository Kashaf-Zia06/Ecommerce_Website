import {v2 as cloudinary} from "cloudinary"
import { json } from "express"
import { productModel } from "../models/productModel.js"
import ApiResponse from "../utils/apiResponse.js"
import ApiError from "../utils/apiError.js"


// function for add product

const addProduct=async(req,res)=>{
    try {
        const {name,description,price,category,subCategory,sizes,bestSeller}=req.body
        const image1=req.files.image1 && req.files.image1[0] 
        const image2=req.files.image2 && req.files.image2[0]
        const image3=req.files.image3 && req.files.image3[0]
        const image4=req.files.image4 && req.files.image4[0]

        const images =[image1,image2,image3,image4].filter((item)=>item!=undefined)

       


        let imagesUrl=await Promise.all(
            images.map(async(item)=>{
                let result=await cloudinary.uploader.upload(item.path,{resource_type:'image'})
                return result.secure_url
            })
        )
      
        const productData={
            name,
            description,
            price:Number(price),
            bestSeller:bestSeller==="true"?"true":"false",
            category,
            subCategory,
            sizes:JSON.parse(sizes), //string to Array
            image:imagesUrl
        }

        const product=new productModel(productData)

        await product.save()

         res.status(200).json(new ApiResponse(200,product,"Product added successfully"))
        
    } catch (error) {
        console.log(error)
        res.json({success:"false",message:error.message})
    }


}

//fucntion for list product

const listProducts=async(req,res)=>{

    try {

        const products=await productModel.find({})
        res.status(200).json(new ApiResponse(200,products,"All products fetched successfully"))

    } catch (error) {
        console.log(error)
        res.json({success:"false",message:error.message}
        )
    }


}

//function for removing product
const removeProduct=async(req,res)=>{
   try {
     await productModel.findByIdAndDelete(req.body.id)
     res.status(200).json(new ApiResponse(200,"product removed successfully"))
   } catch (error) {
    res.json({
        success:"false",
        message:error.message
    })
    
   }


}

//function for single product info
const singleProduct=async(req,res)=>{


}

export {addProduct,removeProduct,singleProduct,listProducts}