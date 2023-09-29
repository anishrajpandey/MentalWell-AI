const { body, validationResult } = require("express-validator");

const veryfiForum = [
  body("title")
    .trim()
    .isLength({ min: 10 })
    .withMessage("Title of forum must be greater or equal to 10"),
  body("content")
    .trim()
    .isLength({ min: 10 })
    .withMessage("Content of forum must be greater or equal to 10"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
module.exports =  veryfiForum ;
