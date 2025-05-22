const mongoose = require("mongoose");

async function connectDB(URL) {
  return await mongoose.connect(URL);
}

module.exports = {
  connectDB,
};
