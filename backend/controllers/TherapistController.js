const Therapist = require("../model/Therapist");
const bcrypt = require("bcryptjs");

const registerTherapist = async (req, res) => {
  //bcrypt password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    console.log(" creating");
    await Therapist.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      age: req.body.age,

      expertise: req.body.expertise,
    });
    console.log("created");
    const email = req.body.email;
    const therapist = await Therapist.findOne({ email });

    res.json({ therapist, verified: true });
  } catch (error) {
    res.json({ error: error.message, verified: false });
  }
};

const loginTherapist = async (req, res) => {
  try {
    // 1. Validate request body
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and Password are required", verified: false });
    }

    // 2. Find the user by email
    const therapist = await Therapist.findOne({ email });
    if (!therapist) {
      return res
        .status(401)
        .json({ error: "Invalid email or password", verified: false });
    }

    // 3. Compare the passwords
    const validPassword = await bcrypt.compare(password, therapist.password);
    if (!validPassword) {
      return res
        .status(401)
        .json({ error: "Invalid email or password", verified: false });
    }

    // 5. Send the response back to the client
    res.json({ therapist, verified: true });
  } catch (error) {
    res.status(500).json({ error: error.message, verified: false });
  }
};

const getTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.find();
    res.json({ therapist });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerTherapist, loginTherapist, getTherapist };
