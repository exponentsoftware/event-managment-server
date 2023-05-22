const {
  createCategory,
  getEventsByCategory,
  getCategory
} = require("../controllers/category.controller");
const express = require("express");
const router = express.Router();

router.post("/create/category", createCategory);
router.get("/events/category/:categoryId", getEventsByCategory);
router.get("/category", getCategory);
module.exports = router;
