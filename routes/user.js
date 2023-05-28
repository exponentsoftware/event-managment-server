const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/user");
const { isAdmin, isVerify } = require("../controllers/middleware");
router.post("/register", isVerify, isAdmin, register);
router.post("/login", login);

module.exports = router;
