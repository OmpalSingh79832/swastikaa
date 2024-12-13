import express from "express";

import {
  createSector,
  getAllSectors,
  getSectorById,
  updateSector,
  deleteSector,
} from "../../controllers/dashboard/sectorController.js";

const router = express.Router();

router.post("/sectors", createSector);
router.get("/sectors", getAllSectors);
router.get("/sectors/:id", getSectorById);
router.put("/sectors/:id", updateSector);
router.delete("/sectors/:id", deleteSector);

export default router;
