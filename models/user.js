const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
      // unique: true,
    },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    password: {
      type: String,
      // required: true,
    },
    latitude:String,
    longitude:String,
    ip:String,
    deviceDetails:String,

  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = {User}
