const { Category } = require("../models/category");
const {  Event } = require("../models/event.model");

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    let category = new Category({
      name,
    });
    category = await category.save();
    res.send(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEventsByCategory = async (req, res) => {
  try {
    const events = await Event.find({
      category: req.params.categoryId,
    }).populate("category", "name");
    if (!events) {
      res.status(400).json({ error: "No Data Found" });
    } else {
      res.status(200).json(events);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
