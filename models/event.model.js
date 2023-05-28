const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const { Schema } = mongoose;
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
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    users: [{ type: String }],
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);
schema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Event = mongoose.model("Event", schema);
module.exports = { Event };
