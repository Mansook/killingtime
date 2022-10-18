const mongoose = require("mongoose");
const { Schema } = mongoose;

const Word = new Schema({
  english: String,
  korea: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    default: "",
  },
  synonyms: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("Word", Word);
