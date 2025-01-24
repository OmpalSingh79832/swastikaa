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
  const { id } = req;
  const {
    title,
    sector,
    budget,
    description,
    companyName,
    keyPoints,
    category,
  } = req.body;

  try {
    const slug = title.split(" ").join("-");
    const sectorslug = sector.split(" ").join("-");
    const categoryslug = category.split(" ").join("-");
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "project",
    });

    if (result) {
      // Save the project details to the database
      const newProject = await Project.create({
        title,
        userId: id,
        slug: slug,
        sectorslug: sectorslug,
        sector,
        budget,
        description,
        companyName,
        image: result.url,
        keyPoints,
        category,
        categoryslug: categoryslug,
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

// Fetch all projects
export const getAllProjects = async (req, res) => {
  // const { id } = req; // Assuming userId is passed as a URL parameter

  // console.log("id", id);

  try {
    const projects = await Project.find();
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateProjectByAdmin = async (req, res) => {
  const { id } = req.params; // Project ID
  const { category, status, name, phone, email } = req.body; // Fields to update

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        category,
        status,
        $set: {
          "executiondetails.0.name": name, // Update the first element's name
          "executiondetails.0.phone": phone, // Update the first element's phone
          "executiondetails.0.email": email, // Update the first element's email
        },
      },
      { new: true } // Return the updated document
    );

    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }

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
export const getProjectsByUserId = async (req, res) => {
  const { id } = req; // Assuming userId is passed as a URL parameter

  console.log("id", id);

  try {
    const projects = await Project.find({ userId: id });
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
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

export const getProjectsBySectorSlug = async (req, res) => {
  const { sector } = req;
  console.log("sector", sector);
  const sectorslug = sector; // Extract sectorslug from route parameters

  try {
    // Find projects that match the sectorslug
    const projects = await Project.find({ sectorslug });

    if (projects.length === 0) {
      return res
        .status(404)
        .json({ message: "No projects found for the given sector slug" });
    }

    res.status(200).json({
      success: true,
      message: "Projects fetched successfully",
      projects,
    });
  } catch (error) {
    console.error("Error fetching projects by sectorslug:", error);
    res.status(500).json({ error: "Failed to fetch projects" });
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
