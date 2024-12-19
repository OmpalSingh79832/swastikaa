import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import createToken from "../config/tokenCreate.js";
import responseReturn from "../utiles/response.js";

import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
  secure: true,
});

// Register User

export const registerUser = async (req, res) => {
  const { name, phone, email, password, userRole, sector } = req.body;

  try {
    // Check if user with the provided email already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user instance
    const user = await userModel.create({
      name,
      phone,
      email,
      password,
      userRole,
      sector,
    });

    // Save the new user to the database
    //  const user =  await user.save();

    // Generate JWT token
    const token = await createToken({
      id: user._id,
      phone: user.phone,
      email: user.email,
      userRole: user.userRole,
      sectoe: user.sector,
    });
    res.cookie("customerToken", token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const profile_update = async (req, res) => {
  const { file } = req;
  const { name, exp } = req.body;
  const { id } = req;

  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "user",
    });

    if (result) {
      await userModel.findByIdAndUpdate(id, { name: name, image: result.url });
      const userInfo = await userModel.findById(id);
      responseReturn(res, 201, {
        message: "Profile info add success",
        userInfo,
      });
    } else {
      responseReturn(res, 404, {
        message: "Image not uploade",
      });
    }
  } catch (error) {
    responseReturn(res, 500, { error: error.message });
  }
};

// Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Username and password" });
    }

    // Check if the password matches
    const isMatch = await user.comparePassword(password); // Call the instance method
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = await createToken({
      id: user._id,
      phone: user.phone,
      email: user.email,
      userRole: user.userRole,
      sectoe: user.sector,
    });
    res.cookie("customerToken", token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    res.status(200).json({ message: "Login Sucessfully", token });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const changePassword = async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  try {
    // Find the user by email
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare oldPassword with the stored hashed password
    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Old password is incorrect" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the password in the database
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get Current User
export const getCurrentUser = async (req, res) => {
  // console.log("req", req.user);
  try {
    const user = await userModel.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
