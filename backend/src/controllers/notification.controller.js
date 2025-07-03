import { asyncHandler } from "../utils/asyncHandler.js";
import {Notification} from '../models/notification.model.js'

export const getNotification = asyncHandler(async(req, res)=>{
    // console.log("noti reacher here...", req.body)
    if(req.body) return res.status(500).send("This endpoint does not accept requests.")
    const notifications = await Notification.find()
    .sort({createdAt : -1})
    .limit(10);
    res.status(200).send(notifications)
})

export const postNotification = asyncHandler(async(req, res)=>{
    if(req.body.notificationData == "") return res.status(500).send("Empty Notification")
    await Notification.create({content : req.body.notificationData});
    res.status(200).send("Notification Added") 
})

export const postImportantNotification = asyncHandler(async(req, res)=>{
    console.log(req.body.importantNotificationData)
    if(req.body.importantNotificationData == "") return res.status(500).send("Empty Notification");
    await Notification.create({content : req.body.importantNotificationData, important : true})
    res.status(200).send("Notification Added!!")
})


export const getImportantNotification = asyncHandler (async (req, res)=> {
    const notifications = await Notification.find({important:true});
    res.status(200).send(notifications);
})