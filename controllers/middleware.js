const { User } = require("../models/user");
require("dotenv").config();
const jwt = require("jsonwebtoken");
exports.isVerify = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) {
      return res.status(400).json({ error: "No credentials sent!" });
    } else {
      const token = req.headers.authorization.split(" ")[1];
      var decoded = jwt.verify(token, process.env.SECRET).data;
      let user = await User.findOne({ email: decoded.email });
      req.user = user;
      next();
    }
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      // Handle the token expiration error
      return res.status(401).json({ error: "Token expired" });
    }
    next(error);
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    // console.log(req.user);
    if (req.user.role === "admin") {
      console.log("Permission Granted");
      next();
    } else {
      res.status(400).json({ error: "Access Denied" });
    }
  } catch (error) {

    next(error);
  }
};
