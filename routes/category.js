const { createCategory } = require("../controllers/category.controller");
const express = require("express");
const router = express.Router();



router.post("/create/category", createCategory);

module.exports = router;
