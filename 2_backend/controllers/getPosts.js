const Post = require('../models/post');

const getPosts = (req, res) => {
  Post.find().then((data) => {
    res.json(data);
  });
};

module.exports = getPosts;
