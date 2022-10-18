const mongoose = require("mongoose");
const { Schema } = mongoose;

const Test = new Schema({
  bookId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  correct: 0,
  wrong: 0,
  data: [],
});

Test.statics.findByBookId = function (bookId) {
  return this.find({ bookId });
};

module.exports = mongoose.model("Test", Test);
