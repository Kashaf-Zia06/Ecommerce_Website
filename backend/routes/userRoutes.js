import express from 'express'
import { loginUser,adminLogin,registerUser } from '../controllers/userController.js'
import { adminAuth } from '../middlewares/adminAuth.js'
const userRouter=express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin,adminAuth)

export default userRouter