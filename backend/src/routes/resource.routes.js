import { Router } from "express";
import { createDepartment, createSubjects, getDepartments, getSubjects, getTopicList, createTopics } from "../controllers/resource.controller.js";
import { upload } from "../utils/multerStorage.js";
import { isAdmin, isGuesting, verifyAccessToken } from "../utils/jwt.js";
import { topicLimiter } from "../utils/rateLimits.js";

const router = Router(); 

router.route('/get-departments').post(verifyAccessToken, getDepartments)     
router.route('/get-subjects').post(verifyAccessToken, getSubjects)        
router.route('/get-topics-list').post(verifyAccessToken, getTopicList)     
router.route('/create-topics').post(verifyAccessToken, isGuesting, topicLimiter, upload.single('resourceFile'), createTopics)   
router.route('/create-department').post(verifyAccessToken, isAdmin, createDepartment)
router.route('/create-subjects').post(verifyAccessToken, isAdmin,createSubjects)    


export default router