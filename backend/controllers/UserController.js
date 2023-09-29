const User = require("../model/User");
const bcrypt = require("bcryptjs");

// register user controller
const registerUser = async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
    });

    // await User.create({
    //     name: "fefdfdfdfd",
    //     email: "rish@gmail.com",
    //     password: "Sdsdsdsdsdsds",
    //     age: 3,

    //   });
    res.json({ user: req.body, verified: true });
  } catch (error) {
    res.json({ error: error.message, verified: false });
  }
};

module.exports = { registerUser };
