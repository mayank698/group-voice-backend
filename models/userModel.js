const mongoose = require("../connection");

const schema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  interests: Array,
  avatar: String,
  DOB: Number,
  isadmin: Boolean,
  type: String,
});
const model = mongoose.model("Users", schema);

module.exports = model;
