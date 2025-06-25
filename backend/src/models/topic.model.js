import mongoose, {Schema} from "mongoose";

const TopicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
        index: true
    }, 
    topicUrl: {
        type: String,
        required: true, 
        index: true
    }, 
    uploadedBy:{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User'
        type: String
    }, 
    subject:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }
})

export const Topic = mongoose.model("Topic", TopicSchema)