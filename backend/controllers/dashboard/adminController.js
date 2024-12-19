import adminModel from "../../models/adminModel.js";
import bcrypt from "bcrypt";
import formidable from "formidable";
import cloudinary from "cloudinary";
import responseReturn from "../../utiles/response.js";
import createToken from "../../config/tokenCreate.js";
import dotenv from "dotenv";
dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
  secure: true,
});

const adminControllers = {
  adminRegister: async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const existingAdmin = await adminModel.findOne({ email });
      if (existingAdmin) {
        return responseReturn(res, 404, { error: "Email already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newAdmin = await adminModel.create({
        name,
        email,
        password: hashedPassword,
      });

      //   await sellerCustomerModel.create({ myId: newAdmin.id });

      const token = await createToken({
        id: newAdmin.id,
        name: newAdmin.name,
        email: newAdmin.email,
        role: newAdmin.role,
      });

      res.cookie("adminToken", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      });

      res.status(200).json({ message: "Login Sucessfully", token });
    } catch (error) {
      console.error(error.message);
      res.status(500).json(error.message);
    }
  },

  adminLogin: async (req, res) => {
    const { email, password } = req.body;

    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      if (!admin) {
        return responseReturn(res, 404, { error: "Email not found" });
      }

      const isPasswordMatch = await bcrypt.compare(password, admin.password);
      if (!isPasswordMatch) {
        return responseReturn(res, 404, { error: "Password is incorrect" });
      }

      const token = await createToken({
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      });
      res.cookie("adminToken", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      });

      res.status(200).json({ message: "Login Sucessfully", token });
    } catch (error) {
      console.error(error.message);
      res.status(500).json(error.message);
    }
  },

  getUser: async (req, res) => {
    const { id, role, admin } = req;

    // console.log("object", admin);

    try {
      const admin = await adminModel.findById(id);

      responseReturn(res, 200, { userInfo: admin });
    } catch (error) {
      responseReturn(res, 500, { error: "Internal server error" });
    }
  },

  // ...existing code...
  changePassword: async (req, res) => {
    const { id, oldPassword, newPassword } = req.body;

    try {
      const admin = await adminModel.findById(id).select("+password");
      if (!admin) {
        return responseReturn(res, 404, { error: "User not found" });
      }

      const isPasswordMatch = await bcrypt.compare(oldPassword, admin.password);
      if (!isPasswordMatch) {
        return responseReturn(res, 400, { error: "Old password is incorrect" });
      }

      admin.password = await bcrypt.hash(newPassword, 10);
      await admin.save();

      responseReturn(res, 200, { message: "Password changed successfully" });
    } catch (error) {
      responseReturn(res, 500, { error: "Internal server error" });
    }
  },
  // ...existing code...

  profileImageUpload: async (req, res) => {
    const { id } = req; // Ensure `id` is passed through middleware
    const { name } = req.body; // Extract 'name' from the request body
    const imageFile = req.file; // Extract the file uploaded via Multer

    // console.log("name:", name);

    if (!imageFile) {
      return responseReturn(res, 400, { error: "Image file is required" });
    }

    try {
      // Upload the file buffer to Cloudinary
      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(
          { folder: "profile" },
          (error, result) => {
            if (error) {
              console.error("Cloudinary upload error:", error);
              reject(new Error("Image upload error"));
            } else {
              resolve(result);
            }
          }
        );
        uploadStream.end(imageFile.buffer); // Pass the file buffer
      });

      // Update admin profile
      await adminModel.findByIdAndUpdate(id, {
        name,
        image: result.secure_url,
      });

      const updatedUser = await adminModel.findById(id);
      responseReturn(res, 201, {
        message: "Image upload success",
        userInfo: updatedUser,
      });
    } catch (error) {
      console.error("Error during profile update:", error);
      responseReturn(res, 500, { error: "Server error" });
    }
  },

  logout: (req, res) => {
    try {
      res.cookie("accessToken", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      });
      responseReturn(res, 200, { message: "Logout success" });
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  },
};

export default adminControllers;
