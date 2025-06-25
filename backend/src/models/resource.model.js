import mongoose, {Schema} from 'mongoose'

const departmentSchema = new mongoose.Schema({
  id: {
    type: String,
    lowercase: true, 
    trim: true,
    required: true,
    unique: true
  },
  branchName: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
//   subject: [subjects]

}, { timestamps: true });

export const Department = mongoose.model('Department', departmentSchema);


