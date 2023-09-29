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
Router.get("/getForums", getForums);
Router.get("/getForum/:id", getForum);
Router.put("/updateForum/:id", updateForum);
Router.delete("/deleteForum/:id", deleteForum);

module.exports = Router;
