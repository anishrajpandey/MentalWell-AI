const express = require("express");
const Router = express.Router();

const User = require("../firebaseDB/config");

Router.post("/register", async (req, res) => {
//   const { email, password, name } = req.body;
  try {
    const user = await User.add({
      name: "name",
      email: "email",
      password: "password",
      
      age:18,
      type: "user",
      emotionalState: 10,
    });
    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})
module.exports = Router;