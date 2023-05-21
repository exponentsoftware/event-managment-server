const mongoose = require("mongoose");

var schema = mongoose.Schema(
  {
    title: String,
    description: String,
    isLive: Boolean,
    eventDate: String,
    image: {
      data: Buffer,
      contentType: String,
    },
    Address: String,
    organiserContact: String,
    users: [{ type: String }],
  },
  { timestamps: true }
);

schema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Event = mongoose.model("event", schema);
module.exports = { Event };
