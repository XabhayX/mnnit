import { Router } from "express";
import { createDepartment, createSubjects, getDepartments, getSubjects, getTopicList, createTopics } from "../controllers/resource.controller.js";
import { upload } from "../utils/multerStorage.js";


const router = Router(); 

router.route('/get-departments').post(getDepartments)
router.route('/get-subjects').post(getSubjects)
router.route('/get-topics-list').post(getTopicList)
router.route('/create-topics').post(upload.single('resourceFile'),  createTopics)
router.route('/create-department').post(createDepartment)
router.route('/create-subjects').post(createSubjects)



export default router