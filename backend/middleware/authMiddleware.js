// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//   const { accessToken } = req.cookies;
//   if (!accessToken) {
//     return res.status(409).json({ error: "Please login first" });
//   } else {
//     try {
//       const deCodeToken = await jwt.verify(accessToken, process.env.SECRET);

//       console.log("object", deCodeToken);
//       req.role = deCodeToken.role;
//       req.id = deCodeToken.id;
//       next();
//     } catch (error) {
//       return res.status(409).json({ error: "Please login" });
//     }
//   }
// };

// export default authMiddleware;

import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  // Get the Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Authentication required" });
  }

  const token = authHeader.split(" ")[1]; // Extract the token after "Bearer"

  try {
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

    req.userRole = decodedToken.userRole;
    req.sector = decodedToken.sector;
    req.user = decodedToken;
    // console.log("Decoded Token:", decodedToken);
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

export default authMiddleware;
