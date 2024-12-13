import express from "express";
import adminControllers from "../../controllers/dashboard/adminController.js";
import { adminMiddleware } from "../../middleware/adminMiddleware.js";

const router = express.Router();

// Admin routes
router.post("/admin/register", adminControllers.adminRegister);
router.post("/admin/login", adminControllers.adminLogin);

router.get("/profile", adminMiddleware, adminControllers.getUser);

// Profile routes
// router.get("/profile", authenticate, authControllers.getUser);
// router.post(
//   "/profile/upload",
//   authenticate,
//   authControllers.profileImageUpload
// );
// router.post("/profile/info", authenticate, authControllers.profileInfoAdd);

// Logout
// router.post("/logout", authenticate, authControllers.logout);

export default router;
