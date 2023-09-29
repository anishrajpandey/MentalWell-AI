const express = require("express");
const Router = express.Router();
const {
  addForum,
  getForums,
  getforum,
  updateforum,
  deleteForum,
} = require("../controllers/ForumController");
const { veryfiForum } = require("../Middleware/forum");

Router.post("/addForum", veryfiForum, addForum);
Router.get("/forums", getForums);
Router.get("/forum/:id", getforum);
Router.update("/forum/:id", updateforum);
Router.delete("/forum/:id", deleteForum);

module.exports = Router;