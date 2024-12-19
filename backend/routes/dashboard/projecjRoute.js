import express from "express";
import multer from "multer";
import {
  createProject,
  updateProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  uploadPrepsole,
} from "../../controllers/dashboard/projectController.js";

import { adminMiddleware } from "../../middleware/adminMiddleware.js";
import authMiddleware from "../../middleware/authMiddleware.js";
// import upload from "../../utiles/multer.js";

const router = express.Router();

// Configure Multer for file upload
const upload = multer({ dest: "uploads/project" });

// Project routes
router.post(
  "/add-project",
  authMiddleware,
  upload.single("image"),
  createProject
); // Create a new project
router.put("/project/update/:id", authMiddleware, updateProject); // Update a project by ID
router.delete("/delete/project/:id", authMiddleware, deleteProject); // Delete a project by ID
router.get("/get-all-project", authMiddleware, getAllProjects); // Get all projects
router.get("/get-project/:id", authMiddleware, getProjectById); // Get a project by ID
// router.get("/slug/:slug", getProjectBySlug); // Get a project by slug
router.post(
  "/upload",
  authMiddleware,
  upload.single("prepsole"),
  uploadPrepsole
); // Upload PDF file

export default router;
