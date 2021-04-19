const Post = require('../models/post');

const updatePost = (req, res) => {
  const id = req.params.id;
  const postBody = req.body;

  Post.findByIdAndUpdate(id, {
    title: postBody.title,
    body: postBody.body,
  }).then((response) => {
    console.log('data updated');
    res.send();
  });
};

module.exports = updatePost;
