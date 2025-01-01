import express from "express";
import {
  createAppliedProject,
  getAllAppliedProjects,
  getAppliedProjectById,
  updateAppliedProject,
  deleteAppliedProject,
  getApplyProjectByUserInfoId,
} from "../controllers/applyprojectController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../utiles/multer.js";

const router = express.Router();

router.post(
  "/user/apply-project",
  authMiddleware,
  upload.single("preposal"),
  createAppliedProject
);
router.get("/get-all/apply-project", getAllAppliedProjects);
router.get(
  "/get-apply-project/consultant/:userId",
  getApplyProjectByUserInfoId
);
router.get("/:id", getAppliedProjectById);
router.put("/:id", updateAppliedProject);
router.delete("/:id", deleteAppliedProject);

export default router;
