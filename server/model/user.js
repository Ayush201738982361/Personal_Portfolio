const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    msg: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const message = mongoose.model("userMessage", schema);

module.exports = message;
