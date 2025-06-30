import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

export const app = express(); 

app.use(cors({
    // origin: process.env.CORS_ORIGIN, 
    // credentials: true
}))
app.use(cookieParser())
app.use(express.urlencoded({
    limit: "16kb", 
    extended: true
}))
app.use(express.json({
    // limit: "32kb"
}))
app.use(express.static("public"))



//  Routes
import userRouter from './routes/user.routes.js'
import resourceRouter from './routes/resource.routes.js'
import notificationRouter from './routes/notification.routes.js'

app.use('/api/users', userRouter)
app.use('/api/resources', resourceRouter)
app.use('/api/notifications', notificationRouter)

// app.post('/api/notifications/get-notification', ()=>{console.log("I ran tired x 2")})