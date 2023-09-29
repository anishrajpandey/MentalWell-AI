const express = require("express");
const Router = express.Router();
const { registerUser, loginUser } = require("../controllers/UserController");
const { registerMiddleware, loginMiddleware } = require("../Middleware/user");

Router.post("/register", registerMiddleware, registerUser);
Router.post("/loginUser", loginMiddleware, loginUser);

module.exports = Router;
