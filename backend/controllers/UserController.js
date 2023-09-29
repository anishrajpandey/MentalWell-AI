const User = require("../model/User");
const bcrypt = require("bcryptjs");

// register user controller
const registerUser = async (req, res) => {
  //bcrypt password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      age: req.body.age,
      userType: req.body.userType,
      emotionalState: req.body.emotionalState,
    });

    res.json({ user: req.body, verified: true });
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

module.exports = { registerUser, loginUser };
