import mongoose, {Schema} from 'mongoose'

const NotificationSchema = new Schema({
    content:{
        type : String, 
        required: true, 
        trim: true
    }, 
    important: {
        type: Boolean
    }
}, 
{timestamps: true})

export const Notification = mongoose.model('Notification', NotificationSchema)