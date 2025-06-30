import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        // userName: {
        //     type: String, 
        //     // required: true, 
        //     // unique: true, 
        //     lowercase: true, 
        //     // trim: true, 
        //     // index: true         // searchable
        // },
        email: {
            type: String, 
            required: true, 
            unique: true, 
            lowercase: true, 
            trim: true, 
        },
        fullName: {
            type: String, 
            lowercase: true, 
            trim: true, 
        }, 
        avatar: { 
            type: String, 
        }, 
        password: { 
            required: [true, 'Password is required'], 
            type: String
        },
        regNo : {
            type: String, 
            required: true, 
            unique: true, 
            index: true, 
            trim: true
        }, 
        role: { 
            type: String, 
            enum: ["student", "staff", "admin", "guest"], 
            required: true
        }, 
        contributions: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Topic"
        }]
    }, 
    {
        timestamps: true
    }
)


export const User = new mongoose.model("User", userSchema )