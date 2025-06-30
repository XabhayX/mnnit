import { Router } from "express";
import { registerUser, loginUser, getContribution } from "../controllers/user.controller.js";

const router = Router()

router.route("/register-user").post(registerUser)
router.route("/login-user").post(loginUser)
router.route("/get-contribution").post(getContribution)


export default router; 
