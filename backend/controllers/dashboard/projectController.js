import Project from "../../models/projectModel.js";
import cloudinary from "cloudinary";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

// Manually define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
  secure: true,
});

export const createProject = async (req, res) => {
  const { file } = req;
  console.log(file);
  const {
    title,
    slug,
    sector,
    budget,
    description,
    companyName,
    keyPoints,
    category,
  } = req.body;

  // if (!file) {
  //   return res.status(400).json({ error: "No file uploaded" });
  // }

  // if (file.mimetype !== "application/pdf") {
  //   return res.status(400).json({ error: "Only PDF files are allowed" });
  // }

  try {
    // Define the folder path where files will be saved
    // const uploadFolder = path.join(__dirname, "../../prepsole/agent");

    // Ensure the folder exists, create it if it doesn't
    // if (!fs.existsSync(uploadFolder)) {
    //   fs.mkdirSync(uploadFolder, { recursive: true });
    // }

    // Generate a unique filename for the PDF
    // const uniqueFilename = `${Date.now()}-${file.originalname}`;

    // Full path where the file will be saved
    // const filePath = path.join(uploadFolder, uniqueFilename);

    // Move the uploaded file to the target location
    // fs.renameSync(file.path, filePath);

    const result = await cloudinary.uploader.upload(file.path, {
      folder: "project",
    });

    if (result) {
      // Save the project details to the database
      const newProject = await Project.create({
        title,
        slug,
        sector,
        budget,
        description,
        companyName,
        // prepsole: `/prepsole/agent/${uniqueFilename}`, // Save the relative path in the database
        image: result.url,
        keyPoints,
        category,
      });

      res
        .status(201)
        .json({ message: "Project created successfully", project: newProject });
    } else {
      res.status(404).json({
        success: false,
        error: "Image upload failed",
      });
    }
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ error: "Failed to create project" });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    slug,
    sector,
    budget,
    description,
    companyName,
    keyPoints,
    questions,
    status,
    rating,
  } = req.body;

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title,
        slug,
        sector,
        budget,
        description,
        companyName,
        keyPoints,
        questions,
        status,
        rating,
      },
      { new: true } // Return the updated document
    );

    if (!updatedProject)
      return res.status(404).json({ error: "Project not found" });

    res.status(200).json({
      message: "Project updated successfully",
      project: updatedProject,
    });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ error: "Failed to update project" });
  }
};

// Delete a project
export const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject)
      return res.status(404).json({ error: "Project not found" });

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ error: "Failed to delete project" });
  }
};

// Fetch all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
};

// Fetch a single project by ID
export const getProjectById = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);

    if (!project) return res.status(404).json({ error: "Project not found" });

    res.status(200).json({ project });
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ error: "Failed to fetch project" });
  }
};

// Fetch a project by slug
export const getProjectBySlug = async (req, res) => {
  const { slug } = req.params;

  try {
    const project = await Project.findOne({ slug });

    if (!project) return res.status(404).json({ error: "Project not found" });

    res.status(200).json({ project });
  } catch (error) {
    console.error("Error fetching project by slug:", error);
    res.status(500).json({ error: "Failed to fetch project" });
  }
};

// Upload a PDF file
export const uploadPrepsole = async (req, res) => {
  const { id } = req;
  const { file } = req;

  console.log("id and file", id, file);

  if (!file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "prepsole",
      resource_type: "raw", // Upload as a raw file (e.g., PDF)
    });

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { prepsole: result.secure_url },
      { new: true }
    );

    if (!updatedProject)
      return res.status(404).json({ error: "Project not found" });

    res
      .status(200)
      .json({ message: "PDF uploaded successfully", project: updatedProject });
  } catch (error) {
    console.error("Error uploading PDF:", error);
    res.status(500).json({ error: "Failed to upload PDF" });
  }
};
