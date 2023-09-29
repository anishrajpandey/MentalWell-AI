const mongoose = require("mongoose");

const commentSchena = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  userID: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  forumID: {
    type: mongoose.Schema.ObjectId,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Comment = mongoose.model("Comments", commentSchena);
