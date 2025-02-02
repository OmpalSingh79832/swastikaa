import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import adminRoute from "./routes/dashboard/adminRoute.js";
import projectRoute from "./routes/dashboard/projecjRoute.js";
import sectorRoute from "./routes/dashboard/sectorRoute.js";
import applyprojectRoute from "./routes/applyprojectRoute.js";
import createSubscriptionRoute from "./routes/dashboard/createSubscriptionRoute.js";
import userSubscriptionRoute from "./routes/userSubscriptionRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", userRoute);
app.use("/api", adminRoute);
app.use("/api", projectRoute);
app.use("/api", sectorRoute);
app.use("/api", applyprojectRoute);
app.use("/api", createSubscriptionRoute);
app.use("/api", userSubscriptionRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
