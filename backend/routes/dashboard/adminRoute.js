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
  adminMiddleware, // Middleware for admin authentication
  upload.single("image"), // Expecting a single file with the field name "image"
  adminControllers.profileImageUpload // Controller to handle profile update
);

// Profile routes
// router.get("/profile", authenticate, authControllers.getUser);
// router.post(
//   "/profile/upload",
//   authenticate,
//   authControllers.profileImageUpload
// );
// router.post("/profile/info", authenticate, authControllers.profileInfoAdd);

// Logout
router.post("/logout", adminMiddleware, adminControllers.logout);

export default router;
