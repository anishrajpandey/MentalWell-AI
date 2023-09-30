const express = require("express");
const Router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  setEmotionState,
} = require("../controllers/UserController");
const { registerMiddleware, loginMiddleware } = require("../Middleware/user");

Router.post("/register", registerMiddleware, registerUser);
Router.post("/loginUser", loginMiddleware, loginUser);
Router.get("/users", getUser);
Router.post("/setEmotionState", setEmotionState);
module.exports = Router;
