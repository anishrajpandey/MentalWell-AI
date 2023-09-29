const mongoose = require("mongoose");
const fakeName = require("../fakename/fakename");
const forumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  fakeName:{
    type: String,
    required: false,
    default: fakeName,
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  userID: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
});

module.exports = Forum = mongoose.model("Forums", forumSchema);
