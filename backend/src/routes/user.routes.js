import { Router } from "express";
import { registerUser, loginUser, getContribution } from "../controllers/user.controller.js";
import { isAdmin, verifyAccessToken } from "../utils/jwt.js";
import { loginLimiter } from "../utils/rateLimits.js";

const router = Router()

// router.route("/register-user").post(isAdmin, checking, registerUser)
router.route("/register-user").post(verifyAccessToken, isAdmin, registerUser)   // frontend secured  // backend secured
router.route("/login-user").post(loginLimiter, loginUser)          // not required    
router.route("/get-contribution").post(verifyAccessToken, getContribution)       // frontend secured   // backend secured


export default router; 
