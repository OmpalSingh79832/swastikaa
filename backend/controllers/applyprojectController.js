import ApplyProject from "../models/applyprojectModel.js";
import userModel from "../models/userModel.js";

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
  const { projectId, userBudget, preposal, status } = req.body;

  try {
    const userInfo = await userModel.findById(id);
    // console.log("body", userInfo);

    const newAppliedProject = new ApplyProject({
      projectId,
      userInfo,
      userBudget,
      preposal,
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
