const { Category } = require("../models/category");

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
