// create user model
const mongoose = require("mongoose");
const { MALE, FEMALE, OTHERS } = require("../constants/gender");
const therapistSchema = new mongoose.Schema({
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
  expertise: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: [MALE, FEMALE, OTHERS],
    required: true,
  },
  userType: {
    type: String,
    default: "therapist",
  },
});

module.exports = Therapist = mongoose.model("Therapists", therapistSchema);
