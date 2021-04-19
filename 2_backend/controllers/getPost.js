const Post = require('../models/post');

const getPost = (req, res) => {
  const id = req.params.id;

  Post.findById(id).then((data) => res.json(data));
};

module.exports = getPost;
