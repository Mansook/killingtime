const mongoose = require("mongoose");
const { Schema } = mongoose;
const Word = {
  english: String,
  korea: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
};

const WordList = new Schema({
  title: String,
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  comment: String,
  words: [Word],
  star: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("list", WordList);
