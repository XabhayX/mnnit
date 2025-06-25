import mongoose, {Schema} from "mongoose";

const SubjectSchema = new mongoose.Schema({
  subjectName: {
    type:String, 
    required: true,
    trim:true, 
    index: true,
  }, 
  subjectID: {
    type:String, 
    required: true,
    trim:true, 
    index: true,
  },
  departmentId: { 
    // type: mongoose.Schema.Types.ObjectId, 
    // ref: 'Department'
    type: String, 
    required: true, 
    trim: true, 
    index: true 
  }, 
  topics: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Topic'
  }]
});

export const Subject = mongoose.model("Subject", SubjectSchema)