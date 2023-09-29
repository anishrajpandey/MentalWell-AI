const Comment = require("../model/Comment");

const addComment = async (req, res) => {
  try {
    await Comment.create({
      content: req.body.content,
      userID: req.body.userID,
      forumID: req.body.forumID,
    });
    res.json({ success: true });
  } catch (error) {
    res.json({ error: error.message, success: false });
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().sort({ created_at: -1 });
    res.json({ comments, success: true });
  } catch (error) {
    res.json({ error: error.message, success: false });
  }
};

const deleteComment = async (req, res) => {
  const id = req.params.id;
  try {
    const comment = await Comment.findByIdAndDelete(id);
    if (!comment) {
      return res.json({ error: "Comment not found", success: false });
    }
    res.json({ success: true });
  } catch (error) {
    res.json({ error: error.message, success: false });
  }
};

module.exports = { addComment, getComments, deleteComment };
