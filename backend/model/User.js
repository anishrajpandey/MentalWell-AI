// create user model
const mongoose = require("mongoose");
const { MALE, FEMALE, OTHERS } = require("../constants/gender");
const fakeName = require("../fakename/fakename");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fakeName: {
    type: String,
    required: false,
    default: fakeName,
  },

  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: [MALE, FEMALE, OTHERS],
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

module.exports = User = mongoose.model("Users", userSchema);
