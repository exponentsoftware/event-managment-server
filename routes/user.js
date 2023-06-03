const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/user");
const { isAdmin, isVerify } = require("../controllers/middleware");
const { body, validationResult } = require("express-validator");
const { User } = require("../models/user");
const useragent = require("useragent");
router.post(
  "/register",
  isVerify,
  isAdmin,
  body("email").isEmail().withMessage("Email is invalid"),
  body("username")
    .notEmpty()
    .withMessage("username is required")
    .isLength({ min: 5 })
    .withMessage("username should be more the 5 character"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isStrongPassword()
    .isLength({
      min: 5,
    })
    .withMessage("Password should be more then 6 character "),
  register
);
router.post(
  "/login",
  body("email").isEmail().withMessage("Email is invalid"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isStrongPassword()
    .isLength({
      min: 5,
    })
    .withMessage("Password should be more then 6 character "),
  login
);

router.post("/track", (req, res) => {
  let { latitude, longitude, deviceDetails, userDetails } = req.body;
  console.log(req);
  const agent = useragent.parse(req.headers["user-agent"]);
  deviceDetails = `${agent.device.family} ${agent.os.family} ${agent.os.major}`;
  const newUser = new User({
    latitude,
    longitude,
    ip: req.ip,
    deviceDetails,
    // userDetails,
  });

  console.log(newUser);

  newUser
    .save()
    .then(() => {
      res.json({ message: "User data saved successfully!" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Error saving user data:" + error });
    });
});

module.exports = router;
