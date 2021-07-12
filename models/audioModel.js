const mongoose = require("../connection");

const schema = new mongoose.Schema({
    title: String,
    artist: { type: mongoose.Types.ObjectId, ref: "Users" },
    created: Date,
    file: String,
});

const model = mongoose.model("Audio", schema);

module.exports = model;
