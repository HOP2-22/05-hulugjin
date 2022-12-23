const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const PostSchema = new Schema({
  text: { type: String },
  likes: { type: Number, default: 0 },
  link: { type: String },
  tags: { type: Array },
  publishDate: { type: Date, default: new Date() },
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
