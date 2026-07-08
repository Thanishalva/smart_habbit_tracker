import express from "express";
import {
    register,
    login,
    me,
    updateProfile,
} from "../controllers/authController.js";

import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/me", protect, me);
router.post("/profile", protect, updateProfile);

export default router;
