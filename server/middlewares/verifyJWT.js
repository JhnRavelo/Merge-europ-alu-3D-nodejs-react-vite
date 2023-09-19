const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = async(req, res, next) => {
  // console.log(req.headers.authorization);
  const authHeader = await req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log("here error");
      return res.sendStatus(403);
    }
    req.user = decoded.id;
    next();
  });
};

module.exports = verifyJWT;
