const mongoose = require("mongoose");

const dbSchema = mongoose.Schema({
  image: String,
  caption: String,
});

const dbModel = mongoose.model("post", dbSchema);

module.exports = dbModel;
