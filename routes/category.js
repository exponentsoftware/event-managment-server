const {
  createCategory,
  getEventsByCategory,
} = require("../controllers/category.controller");
const express = require("express");
const router = express.Router();

router.post("/create/category", createCategory);
router.get("/events/category/:categoryId", getEventsByCategory);
module.exports = router;
