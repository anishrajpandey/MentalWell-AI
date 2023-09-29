// create user model
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  emotionalState: {
    type: Number,
    required: false,
    default: 5,
  },
  userType: {
    type: String,
    default: "user",
  },
});

module.exports =User = mongoose.model("Users", userSchema);
