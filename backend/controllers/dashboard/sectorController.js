import sectorModel from "../../models/sectorModel.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
  secure: true,
});

// Create a new sector
export const createSector = async (req, res) => {
  const { name, image, slug } = req.body;

  try {
    const result = await cloudinary.uploader.upload(image.filepath, {
      folder: "sector",
    });

    if (result) {
      const sector = new sectorModel({ name, image: result.url, slug });
      await sector.save();

      res.status(201).json({
        success: true,
        message: "Sector created successfully",
        sector,
      });
    } else {
      res.status(404).json({
        success: false,
        error: "Image upload failed",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create sector",
      error: error.message,
    });
  }
};

// Get all sectors
export const getAllSectors = async (req, res) => {
  try {
    const sectors = await sectorModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      sectors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch sectors",
      error: error.message,
    });
  }
};

// Get a sector by ID
export const getSectorById = async (req, res) => {
  const { id } = req.params;

  try {
    const sector = await sectorModel.findById(id);

    if (!sector) {
      return res.status(404).json({
        success: false,
        message: "Sector not found",
      });
    }

    res.status(200).json({
      success: true,
      sector,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch sector",
      error: error.message,
    });
  }
};

// Update a sector
export const updateSector = async (req, res) => {
  const { id } = req.params;
  const { name, image, slug } = req.body;

  try {
    const sector = await sectorModel.findByIdAndUpdate(
      id,
      { name, image, slug },
      { new: true, runValidators: true }
    );

    if (!sector) {
      return res.status(404).json({
        success: false,
        message: "Sector not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Sector updated successfully",
      sector,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update sector",
      error: error.message,
    });
  }
};

// Delete a sector
export const deleteSector = async (req, res) => {
  const { id } = req.params;

  try {
    const sector = await sectorModel.findByIdAndDelete(id);

    if (!sector) {
      return res.status(404).json({
        success: false,
        message: "Sector not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Sector deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete sector",
      error: error.message,
    });
  }
};
