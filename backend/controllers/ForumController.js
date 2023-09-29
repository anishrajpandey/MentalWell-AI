const Forum = require("../model/Forum");

const addForum = async (req, res) => {
  try {
    await Forum.create({
      title: req.body.title,
      content: req.body.content,
      userID: req.body.userID,
    });
    res.json({ success: true });
  } catch (error) {
    res.json({ error: error.message, success: false });
  }
};

const getForums = async (req, res) => {
  try {
    const forums = await Forum.find();
    res.json({ forums, success: true });
  } catch (error) {
    res.json({ error: error.message, success: false });
  }
};

const getForum = async (req, res) => {
  const id = req.params.id;
  try {
    const forum = await Forum.findById(id);
    res.json({ forum, success: true });
  } catch (error) {
    res.json({ error: error.message, success: false });
  }
};

const updateForum = async (req, res) => {
  const id = req.params.id;
  try {
    const forum = await Forum.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        content: req.body.content,
      },
      { new: true }
    );
    res.json({ forum, success: true });
  } catch (error) {
    res.json({ error: error.message, success: false });
  }
};

const deleteForum = async (req, res) => {
  const id = req.params.id;
  try {
    await Forum.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (error) {
    res.json({ error: error.message, success: false });
  }
};

module.exports = { addForum, getForums, getForum, updateForum, deleteForum };
