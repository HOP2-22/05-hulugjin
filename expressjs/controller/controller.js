const Task = require("../models/task");

const lists = [
  {
    title: "Hun",
    detail: "sheeh",
    isDone: false,
  },
];

exports.getList = async (request, response) => {
  const data = await Task.find();
  response.send(data);
};

exports.addData = async (request, response) => {
  await Task.create({
    detail: request.body.title,
  });
  response.send({ message: "Done nice" });
};

exports.uptadeData = async (request, response) => {
  await Task.findByIdAndUpdate(
    { _id: request.body.id },
    { detail: request.body.title }
  );
  response.send({ message: "Done" });
};

exports.deleteData = async (request, response) => {
  await Task.findByIdAndDelete({ _id: request.body.id });
  response.send({ message: "Amjilttai ustagdlaa" });
};
