const { User } = require("../models/user");
const bcrypt = require("bcrypt");
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashpasword = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashpasword,

    });

    await newUser.save();

    res.status(200).json({
      status: 1,
      success: true,
      data: newUser
    });
  } catch (error) {
    res.status(500).json({ error: error.message, success: false, status: 0 });
  }
};
