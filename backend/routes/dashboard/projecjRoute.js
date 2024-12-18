import express from "express";
import multer from "multer";
import {
  createProject,
  updateProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  getProjectBySlug,
  uploadPrepsole,
} from "../../controllers/dashboard/projectController.js";

import { adminMiddleware } from "../../middleware/adminMiddleware.js";

// import upload from "../../utiles/multer.js";

const router = express.Router();

// Configure Multer for file upload
const upload = multer({ dest: "uploads/propsole" });

// Project routes
router.post(
  "/add-project",
  adminMiddleware,
  upload.single("prepsole"),
  createProject
); // Create a new project
router.put("/priject/update/:id", adminMiddleware, updateProject); // Update a project by ID
router.delete("/delete/project/:id", adminMiddleware, deleteProject); // Delete a project by ID
router.get("/get-all-project", adminMiddleware, getAllProjects); // Get all projects
router.get("/get-project/:id", adminMiddleware, getProjectById); // Get a project by ID
// router.get("/slug/:slug", getProjectBySlug); // Get a project by slug
router.post(
  "/upload",
  adminMiddleware,
  upload.single("prepsole"),
  uploadPrepsole
); // Upload PDF file

export default router;
