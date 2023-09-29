const express = require("express");
const Router = express.Router();
const {
  addComment,
  getComments,
  deleteComment,
} = require("../controllers/CommentController");
const veryfiComment = require("../Middleware/comment");

Router.post("/addComment", veryfiComment, addComment);
Router.get("/getComments", getComments);
Router.delete("/deleteComment/:id", deleteComment);
module.exports = Router;
