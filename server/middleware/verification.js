const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.verifyToken = async (request, h) => {
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) return (h.response('Missing or invalid token ').code(401).takeover());

  try {
    const token = authHeader.split(" ")[1];
    console.log('printed from verification',token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.auth = { credentials: decoded };
    return h.continue;
  } catch (error) {
    console.log("error occurred in verification ", error.message);
    return h.response("Invalid or expired token").code(401).takeover();
  }
};
