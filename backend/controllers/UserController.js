const User = require("../model/User");
const bcrypt = require("bcryptjs");

// register user controller
const registerUser = async (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.json({ error: "Email is already taken", verified: false });
  }

  //bcrypt password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  // console.log("user creating");
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      age: req.body.age,
      gender: req.body.gender,
    });
    // console.log("user created");

    const user = await User.findOne({ email });

    res.json({ user, verified: true });
  } catch (error) {
    res.json({ error: error.message, verified: false });
  }
};

const loginUser = async (req, res) => {
  try {
    // 1. Validate request body
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and Password are required", verified: false });
    }

    // 2. Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ error: "Invalid email or password", verified: false });
    }

    // 3. Compare the passwords
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res
        .status(401)
        .json({ error: "Invalid email or password", verified: false });
    }

    // 5. Send the response back to the client
    res.json({ user, verified: true });
  } catch (error) {
    res.status(500).json({ error: error.message, verified: false });
  }
};

const getUser = async (req, res) => {
  //get all users
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    res.json({ error: error.message });
  }
};
const setEmotionState = async (req, res) => {
  const { _id, emotionState } = req.body;
  try {
    const user = await User.findOne({ _id });
    user.emotionalState = emotionState;
    await user.save();
    res.json({ success: true });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser, getUser , setEmotionState };
