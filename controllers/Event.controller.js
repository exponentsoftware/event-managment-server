const { Event } = require("../models/event.model");

// Create and Save a new Tutorial
exports.createEvent = async (req, res, image) => {
  try {
    let { title, description, eventDate, category, Address, organiserContact } =
      req.body;

    const newEvent = new Event({
      title,
      description,
      eventDate,
      image: image,
      Address,
      organiserContact,
      category,
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
    const findAllEvent = await Event.find({}).populate("category", "name");
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
    const event = await Event.findById(eventId).populate("category", "name");
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a Tutorial by the id in the request
exports.updateEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const {
      title,
      description,
      eventDate,
      Address,
      organiserContact,
      category,
    } = req.body;
    let updateEvent = await Event.findOneAndUpdate(
      {
        _id: eventId,
      },
      {
        title,
        description,
        eventDate,
        Address,
        organiserContact,
        category,
      },
      (err, doc) => {
        if (err) {
          console.log(`Error: ` + err);
        } else {
          res.status(200).json(doc);
        }
      }
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    // res.send(event);
    res.send({ message: `Event ${event.title} Delete Successfully` });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};

// Pagination Event Data

exports.PaginationEventsData = async (req, res) => {
  const { page, limit } = req.query;

  try {
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: { created_at: -1 },
      populate: "category",
    };

    const result = await Event.paginate({}, options);
    const documents = result.docs;
    const totalDocuments = result.totalDocs;
    const totalPages = result.totalPages;

    res.json({
      totalPages,
      totalDocuments,
      documents,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// search  Data in data

exports.searchData = async (req, res) => {
  try {
    const { title, organiserContact, Address, eventDate } = req.query;

    const query = {
      $or: [
        { title: { $regex: String(title), $options: "i" } }, // Case-insensitive regex match on title
        {
          organiserContact: { $regex: String(organiserContact), $options: "i" },
        }, // Case-insensitive regex match on organiserContact
        { Address: { $regex: String(Address), $options: "i" } }, // Case-insensitive regex match on Address
        { eventDate: { $regex: String(eventDate), $options: "i" } }, // Case-insensitive regex match on eventDate
      ],
    };

    const results = await Event.find(query);
    res.json({
      total: results.length,
      results,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
