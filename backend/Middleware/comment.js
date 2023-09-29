const { body, validationResult, check } = require("express-validator");

const veryfiComment = [
  body("content")
    .trim()
    .isLength({ min: 10 })
    .withMessage("Content of comment must be greater or equal to 10"),
  check("userID").isMongoId().withMessage("userID must be a valid mongoID"),
  check("forumID").isMongoId().withMessage("forumID must be a valid mongoID"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = veryfiComment;
