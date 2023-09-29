const express = require("express");
const Router = express.Router();
const {
  addForum,
  getForums,
  getForum,
  updateForum,
  deleteForum,
} = require("../controllers/ForumController");

const veryfiForum = require("../Middleware/forum");

Router.post("/addForum", veryfiForum, addForum);
Router.get("/forums", getForums);
Router.get("/forum/:id", getForum);
Router.put("/forum/:id", updateForum);
Router.delete("/forum/:id", deleteForum);

module.exports = Router;
