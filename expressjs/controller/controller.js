const User = require("../models/task");

exports.getList = async (request, response) => {
  const Lists = await User.find();
  response.send(Lists);
};

exports.getUserById = async (request, response) => {
  const _id = request.params.id;
  const user = await User.findById({ _id });
  response.send(user);
};

exports.getPosts = async (request, response) => {
  const user = await User.create(request.body);
  response.send(user);
};

exports.getUptade = async (request, response) => {
  const _id = request.params.id;
  const upData = request.body;
  try {
    const user = await User.findByIdAndUpdate({ _id }, upData);
    response.send(user);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};

exports.getDelete = async (request, response) => {
  const _id = request.params.id;

  try {
    const user = await User.findByIdAndDelete({ _id });
    response.send(user);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};
