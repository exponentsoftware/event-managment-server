const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

exports.User = mongoose.model("User", userSchema);
