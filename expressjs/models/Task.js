const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const TaskSchema = new Schema({
  detail: { type: String },
  desc: { type: Array },
  isDone: { type: Boolean },
});
const Task = mongoose.model("lists", TaskSchema);
module.exports = Task;
