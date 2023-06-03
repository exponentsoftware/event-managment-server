const { User } = require("../models/user");
const { check, validationResult } = require("express-validator");

const bcrypt = require("bcrypt");
require("dotenv").config();
var jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    // validation on input body error 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const user = await User.findOne({ email: email });
    if (user) {
      res
        .status(500)
        .json({ error: "User Already Exist", success: false, status: 0 });
    } else {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashpasword = bcrypt.hashSync(password, salt);

      const newUser = new User({
        username,
        email,
        role,
        password: hashpasword,
      });

      await newUser.save();

      res.status(200).json({
        status: 1,
        success: true,
        data: newUser,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message, success: false, status: 0 });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(400).json({ message: "No User Found" });
    }

    let match = await bcrypt.compare(password, user.password);

    if (match) {
      let token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 12,
          data: {
            email,
            password,
          },
        },
        process.env.SECRET
      );

      res.json({
        login: "Success",

        user: {
          email: email,
          id: user._id,
          token,
        },
      });
    } else {
      res.json({ error: "No Access" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message, success: false, status: 0 });
  }
};


