import adminModel from "../../models/adminModel.js";
import bcrypt from "bcrypt";
import formidable from "formidable";
import cloudinary from "cloudinary";
import responseReturn from "../../utiles/response.js";
import createToken from "../../config/tokenCreate.js";

cloudinary.v2.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
  secure: true,
});

const adminControllers = {
  adminRegister: async (req, res) => {
    const { name, email, password, image } = req.body;

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
        image,
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

    console.log("object", admin);

    try {
      const admin = await adminModel.findById(id);

      responseReturn(res, 200, { userInfo: admin });
    } catch (error) {
      responseReturn(res, 500, { error: "Internal server error" });
    }
  },

  profileImageUpload: async (req, res) => {
    const { id } = req;
    const form = formidable({ multiples: true });

    form.parse(req, async (err, _, files) => {
      if (err) {
        return responseReturn(res, 500, { error: "Form parsing error" });
      }

      const { image } = files;

      try {
        const result = await cloudinary.uploader.upload(image.filepath, {
          folder: "profile",
        });
        await adminModel.findByIdAndUpdate(id, { image: result.url });

        const updatedUser = await adminModel.findById(id);
        responseReturn(res, 201, {
          message: "Image upload success",
          userInfo: updatedUser,
        });
      } catch (error) {
        responseReturn(res, 500, { error: "Image upload failed" });
      }
    });
  },

  profileInfoAdd: async (req, res) => {
    const { division, district, shopName, sub_district } = req.body;
    const { id } = req;

    try {
      await sellerModel.findByIdAndUpdate(id, {
        shopInfo: { shopName, division, district, sub_district },
      });

      const updatedUser = await sellerModel.findById(id);
      responseReturn(res, 201, {
        message: "Profile info added successfully",
        userInfo: updatedUser,
      });
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
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
