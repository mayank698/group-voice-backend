const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  description: String,
  artist: { type: mongoose.Types.ObjectId, ref: "Users" },
  created: Date,
  podcasts: [{ type: mongoose.Types.ObjectId, ref: "Podcasts" }],
  category: String,
  thumb: String,
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Reviews" }]
});

const model = mongoose.model("Series", schema);

module.exports = model;
