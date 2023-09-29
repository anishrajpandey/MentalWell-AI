const mongoose = require("mongoose");
const forumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
});

module.exports=Forum = mongoose.model("Forums", forumSchema);
