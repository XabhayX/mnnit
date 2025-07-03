import { Router } from "express";
import { postNotification, getNotification, postImportantNotification, getImportantNotification } from "../controllers/notification.controller.js";
import { isAdmin, verifyAccessToken } from "../utils/jwt.js";

const router = Router();

router.route('/get-notification').post(getNotification)
router.route('/post-notification').post(verifyAccessToken, isAdmin, postNotification)
router.route('/post-importantnotification').post(verifyAccessToken, isAdmin, postImportantNotification)
router.route('/get-importantnotification').post(getImportantNotification)

export default router;