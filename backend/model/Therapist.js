// create user model
const mongoose = require("mongoose");
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

  userType: {
    type: String,
    default: "therapist",
  },
});

module.exports = User = mongoose.model("Therapists", therapistSchema);
