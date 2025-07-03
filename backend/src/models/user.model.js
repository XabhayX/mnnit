import mongoose, {Schema} from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config({ path: '../../.env' });

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
            enum: ["student", "staff", "admin"], 
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

userSchema.pre("save", async function (next) {
    
    if (!this.isModified("password"))  return next();

    this.password = await bcrypt.hash(this.password, 10)
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    console.log(password, this.password);
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id : this._id,
        regNo : this.regNo
    }, 
    process.env.ACCESS_TOKEN_SECRET, 
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

// userSchema.methods.generateRefreshToken = function(){
//         return jwt.sign({
//         _id : this._id,
//     }, 
//     process.env.REFRESH_TOKEN_SECRET, 
//     {
//         expiresIn: process.env.REFRESH_TOKEN_EXPIRY
//     }
// )
// }

export const User = new mongoose.model("User", userSchema )