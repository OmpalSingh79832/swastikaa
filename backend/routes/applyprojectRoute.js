import express from "express";
import {
  createAppliedProject,
  getAllAppliedProjects,
  getAppliedProjectById,
  updateAppliedProject,
  deleteAppliedProject,
} from "../controllers/applyprojectController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../utiles/multer.js";

const router = express.Router();

router.post(
  "/user/apply-project",
  authMiddleware,
  upload.single("prepsole"),
  createAppliedProject
);
router.get("/", getAllAppliedProjects);
router.get("/:id", getAppliedProjectById);
router.put("/:id", updateAppliedProject);
router.delete("/:id", deleteAppliedProject);

export default router;
