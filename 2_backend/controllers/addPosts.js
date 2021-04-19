const Post = require('../models/post');

const addPosts = (req, res) => {
  const post = new Post(req.body);

  post.save().then((response) => console.log('data saved'));

  res.send();
};

module.exports = addPosts;
