const { body, validationResult } = require("express-validator");

const registerTherapistMiddleware = [
  body("name").trim().isLength({ min: 3 }).withMessage("Name is required"),
  body("email").trim().isEmail().withMessage("Invalid Email Address"),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
    

  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const loginTherapistMiddleware = [
  body("email").trim().isEmail().withMessage("Invalid Email Address"),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { registerTherapistMiddleware, loginTherapistMiddleware };
