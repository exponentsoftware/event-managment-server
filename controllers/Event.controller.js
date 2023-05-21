const { Event } = require("../models/event.model");

// Create and Save a new Tutorial
exports.createEvent = async (req, res, image) => {
  try {
    let {
      title,
      description,
      eventDate,
      Address,
      organiserContact,
    } = req.body;

    const newEvent = new Event({
      title,
      description,
      eventDate,
      image:image,
      Address,
      organiserContact,
    });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Retrieve all Tutorials from the database.
exports.findAllEvents = async (req, res) => {
  try {
    const findAllEvent = await Event.find();
    if (!findAllEvent) {
      res.status(400).json({ error: "Not Event Found" });
    }

    res.status(200).json(findAllEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Find a single Tutorial with an id
exports.findOneEvents = async (req, res) => {
  try {
    let eventId = req.params.eventId;
    const event = await Event.findById(eventId);
    res.json(event)
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
