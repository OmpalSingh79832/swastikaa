// middlewares/adminMiddleware.js

import jwt from "jsonwebtoken";

export const adminMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Authentication required" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

    req.role = decodedToken.role;
    req.id = decodedToken.id;
    req.admin = decodedToken;
    // console.log("decodedToken", decodedToken);
    const { role } = req;
    if (role !== "admin") {
      return res.status(403).json({ error: "Access denied: Admins only" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
