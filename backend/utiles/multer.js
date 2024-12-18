import multer from "multer";

const storage = multer.memoryStorage(); // Use in-memory storage
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});

export default upload;
