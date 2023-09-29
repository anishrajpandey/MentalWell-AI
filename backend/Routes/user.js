const express = require("express");
const Router = express.Router();
const { registerUser } = require("../controllers/UserController");
const { registerMiddleware } = require("../Middleware/user");

Router.post("/register", registerUser);

module.exports = Router;