const Post = require("../models/Post");

exports.getPostList = async (req, res) => {
  const data = await Post.find();
  res.send(data);
};
