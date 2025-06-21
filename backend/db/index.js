import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// dotenv.config();
import {DB_NAME} from '../src/constants.js'

// export const connectDB = (
//     async ()=>{
//        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`) 
//        console.log(`${process.env.MONGO_URI}/${DB_NAME}`)
//        console.log("Connection host is: ", connectionInstance.connection.host)
//     }
// )()


export const connectDB = async ()=> {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`) 
       console.log(`${process.env.MONGO_URI}/${DB_NAME}`)
       console.log("Connection host is: ", connectionInstance.connection.host)
}