import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import createToken from "../config/tokenCreate.js";

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
