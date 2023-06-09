const {createEvent,findAllEvents,findOneEvents,updateEvent,deleteEvent ,findAllPublished,PaginationEventsData,searchDataMultipleFilter} = require('../controllers/event')
const { isVerify } = require("../controllers/middleware");
var multer = require("multer");
// const fs = require("fs");
// const path = require("path");

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "../uploads"));
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

// var upload = multer({ storage: storage });

const express = require('express')
const router = express.Router()

router.post(
  "/new/event",
  // isVerify,
  createEvent
  // upload.single("image"), async (req, res) => {
  //   var imageBuffer = {
  //     data: fs.readFileSync(
  //       path.join(__dirname, "../uploads/" + req.file.filename)
  //     ),
  //     contentType: "image/png",
  //   };
  //   var imageBase64 = imageBuffer.toString("base64");
  //   var image = {
  //     data: imageBase64,
  //     contentType: "image/png",
  //   };

  //   console.log(image);

  // }
);
router.get("/all/events", findAllEvents);
router.get("/event/:eventId", findOneEvents);
router.get("/filter/events", PaginationEventsData);
router.get("/search/events", searchDataMultipleFilter);
router.put("/update/event/:eventId", updateEvent);
router.delete("/delete/event/:id", deleteEvent);

module.exports = router;