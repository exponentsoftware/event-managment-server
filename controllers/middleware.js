const { User } = require("../models/user");
require("dotenv").config();
const jwt = require("jsonwebtoken");
exports.isVerify = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;

    if (!auth) {
      return res.json({ error: "No credentials sent!" });
    } else {
      const token = req.headers.authorization.split(" ")[1];
      var decoded = jwt.verify(token, process.env.SECRET);
      console.log(decoded);
      let user = await User.findOne({ email: jwt.decode.email });
      user = req.user;
      next();
    }
    console.log(auth);
  } catch (error) {
    res.status(500).json({ error: error.message });
    next();
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    
  } catch (error) {
    res.status(500).json({ error: error.message });
    next();
  }
};
