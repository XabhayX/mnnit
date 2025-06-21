// import { connectDB } from "../db/index.js";
import {connectDB} from "./db/index.js"
import { app } from "./app.js";
import dotenv from "dotenv";



dotenv.config(); 
connectDB()

app.get('/', (req, res)=>{
    res.send("This is response to your requeast to Server Application")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server Application has started at port ${process.env.PORT}`)
})