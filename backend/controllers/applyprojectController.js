import ApplyProject from "../models/applyprojectModel.js";
import userModel from "../models/userModel.js";
import { fileURLToPath } from "url";

import path from "path";
import fs from "fs";

// Manually define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all applied projects
export const getAllAppliedProjects = async (req, res) => {
  try {
    const appliedProjects = await ApplyProject.find();
    res.status(200).json(appliedProjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single applied project by ID
export const getAppliedProjectById = async (req, res) => {
  try {
    const appliedProject = await ApplyProject.findById(req.params.id);
    if (!appliedProject) {
      return res.status(404).json({ message: "Applied project not found" });
    }
    res.status(200).json(appliedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new applied project
export const createAppliedProject = async (req, res) => {
  const { id } = req;
  const { file } = req;
  const { projectId, userBudget, preposal, status } = req.body;

  if (!file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  if (file.mimetype !== "application/pdf") {
    return res.status(400).json({ error: "Only PDF files are allowed" });
  }

  try {
    const userInfo = await userModel.findById(id);
    // Define the folder path where files will be saved
    const uploadFolder = path.join(__dirname, "../prepsole/agent");

    // Ensure the folder exists, create it if it doesn't
    if (!fs.existsSync(uploadFolder)) {
      fs.mkdirSync(uploadFolder, { recursive: true });
    }

    // Generate a unique filename for the PDF
    const uniqueFilename = `${Date.now()}-${file.originalname}`;

    // Full path where the file will be saved
    const filePath = path.join(uploadFolder, uniqueFilename);

    // Move the uploaded file to the target location
    fs.renameSync(file.path, filePath);

    const newAppliedProject = new ApplyProject({
      projectId,
      userInfo,
      userBudget,
      preposal: `/prepsole/agent/${uniqueFilename}`, // Save the relative path in the database
      status,
    });

    const savedAppliedProject = await newAppliedProject.save();
    res.status(201).json(savedAppliedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an applied project by ID
export const updateAppliedProject = async (req, res) => {
  try {
    const updatedAppliedProject = await ApplyProject.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAppliedProject) {
      return res.status(404).json({ message: "Applied project not found" });
    }
    res.status(200).json(updatedAppliedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an applied project by ID
export const deleteAppliedProject = async (req, res) => {
  try {
    const deletedAppliedProject = await ApplyProject.findByIdAndDelete(
      req.params.id
    );
    if (!deletedAppliedProject) {
      return res.status(404).json({ message: "Applied project not found" });
    }
    res.status(200).json({ message: "Applied project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
