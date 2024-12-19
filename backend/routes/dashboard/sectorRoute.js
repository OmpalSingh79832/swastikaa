import express from "express";
import multer from "multer";

import {
  createSector,
  getAllSectors,
  getSectorById,
  updateSector,
  deleteSector,
} from "../../controllers/dashboard/sectorController.js";
import { adminMiddleware } from "../../middleware/adminMiddleware.js";

const router = express.Router();

const upload = multer({ dest: "uploads/sector" });

router.post(
  "/add-sectors",
  adminMiddleware,
  upload.single("image"),
  createSector
);
router.get("/sectors", getAllSectors);
router.get("/sectors/:id", getSectorById);
router.put("/sectors/:id", adminMiddleware, updateSector);
router.delete("/sectors/:id", adminMiddleware, deleteSector);

export default router;
