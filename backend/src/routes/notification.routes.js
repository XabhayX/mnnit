import { Router } from "express";
import { postNotification, getNotification } from "../controllers/notification.controller.js";

const router = Router();

router.route('/get-notification').post(getNotification)
router.route('/post-notification').post(postNotification)

export default router;