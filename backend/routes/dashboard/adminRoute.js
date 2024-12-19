import express from "express";
import adminControllers from "../../controllers/dashboard/adminController.js";
import { adminMiddleware } from "../../middleware/adminMiddleware.js";
import upload from "../../utiles/multer.js";

const router = express.Router();

// Admin routes
router.post("/admin/register", adminControllers.adminRegister);
router.post("/admin/login", adminControllers.adminLogin);

router.get("/admin/profile", adminMiddleware, adminControllers.getUser);
router.put(
  "/admin/update-profile",
  adminMiddleware,
  upload.single("image"),
  adminControllers.profileImageUpload
);

// Logout
router.post("/logout", adminMiddleware, adminControllers.logout);

export default router;
