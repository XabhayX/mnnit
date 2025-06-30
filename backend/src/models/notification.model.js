import mongoose, {Schema} from 'mongoose'

const NotificationSchema = new Schema({
    content:{
        type : String, 
        required: true
    }
}, 
{timestamps: true})

export const Notification = mongoose.model('Notification', NotificationSchema)