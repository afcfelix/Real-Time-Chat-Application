import express from "express";
import { registerUser, loginUser, allUsers } from "../controllers/userControllers.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

router.post(`/`, registerUser);
router.post(`/login`, loginUser);
router.get(`/`, protect, allUsers);

export default router;