import { Department } from "../models/resource.model.js";
import { Subject } from "../models/subject.model.js";
import { Topic } from "../models/topic.model.js";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs/promises'; 


export const getDepartments = asyncHandler(async(req, res)=>{
        const departments = await Department.find();
        res.send(departments)   
})

export const getSubjects = asyncHandler(async(req, res)=>{
    const departmentId = req.body.departmentId;
    const subjects = await Subject.find({departmentId});
    res.send(subjects);    
} )

export const getTopicList = asyncHandler(async(req, res)=>{
    const {branchParam, subjectParam} = req.body;
    const foundSubject = await Subject.findOne({departmentId: branchParam, subjectID: subjectParam}).populate("topics")
    // console.log(Array.isArray( foundSubject.topics))
    res.send(foundSubject.topics);
} )


export const createTopics = asyncHandler(async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

  const { title, uploadedBy, regNo, subject } = req.body;

  const cloudinaryResult = await cloudinary.uploader.upload(req.file.path, {
    folder: 'resources',
  });

  await fs.unlink(req.file.path);

  res.status(200).json({
    message: 'File received and uploaded to Cloudinary',
  });

  const foundSubject = await Subject.findOne({ subjectID: subject });
  const topicUrl = cloudinaryResult.secure_url;

  if (foundSubject) {
    const createdTopic = await Topic.create({
      title: `${title}`,
      topicUrl: `${topicUrl}`,
      uploadedBy: `${uploadedBy}`,
      subject: foundSubject._id,
    });

    foundSubject.topics.push(createdTopic._id);
    await foundSubject.save();

    const foundUser = await User.findOne({ regNo: regNo });
    foundUser.contributions.push(createdTopic._id);
    await foundUser.save();
  }
});


export const createDepartment = asyncHandler(async(req, res)=>{
      await Department.create(req.body)
      res.status(200).json({ 
      message: 'Department Created',
    });
})

export const createSubjects = asyncHandler(async(req, res)=>{
    // console.log("Subject creation query")
    await Subject.create(req.body);
    res.send('Subject Details Accepted')
})