const express = require("express");
const Router = express.Router();
const { registerUser, loginUser,getUser } = require("../controllers/UserController");
const { registerMiddleware, loginMiddleware } = require("../Middleware/user");

Router.post("/register", registerMiddleware, registerUser);
Router.post("/loginUser", loginMiddleware, loginUser);
Router.get("/users",getUser);
module.exports = Router;
