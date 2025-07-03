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

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path} →`, req.body);
  next();
});



//  Routes
import userRouter from './routes/user.routes.js'
import resourceRouter from './routes/resource.routes.js'
import notificationRouter from './routes/notification.routes.js'

app.use('/api/users', userRouter)      // frontend secure     // backend secured
app.use('/api/resources', resourceRouter)   // frontend secure   
app.use('/api/notifications', notificationRouter) // frontend secure

// app.post('/api/notifications/get-notification', ()=>{console.log("I ran tired x 2")})