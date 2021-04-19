const Post = require('../models/post');

const deletePost = (req, res) => {
  const id = req.params.id;

  Post.findByIdAndDelete(id).then((response) => {
    console.log('data deleted');
    res.send();
  });
};

module.exports = deletePost;
