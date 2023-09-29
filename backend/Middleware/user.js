

const registerMiddleware = async (req, res, next) => {
  next();
};

const loginMiddleware =  async (req, res, next) => {
  const verifyEmail = await body("email").isEmail().withMessage("Email is not valid");
  const verifyPassword = await body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long");

  next();
};

module.exports = { registerMiddleware, loginMiddleware };
