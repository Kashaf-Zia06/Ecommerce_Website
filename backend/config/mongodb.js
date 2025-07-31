import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config()
const connectDB = async () => {

    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/business`)
        console.log(` Mongodb connected on ${connectionInstance.connection.host}`)
    }


    catch (error) {
        console.log("Connection failed")
        console.log(error)

    }

}
export default connectDB