import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'

const app=express()
const PORT= process.env.port||3000
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())


app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("Hello backend")
    
})

app.listen(PORT,()=>{
    console.log("Server is up")
})