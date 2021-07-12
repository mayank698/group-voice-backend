const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  description: String,
  artist: { type: mongoose.Types.ObjectId, ref: "Users" },
  created: Date,
  publishDate: Date,
  published: Boolean,
  data: Object,
  thumb: String,
  podcastfile: String,
  category: String,
});

const model = mongoose.model("Podcasts", schema);

module.exports = model;
