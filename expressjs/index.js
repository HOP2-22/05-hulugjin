const express = require("express");
const Router = require("./router/router.js");
const mongoose = require("mongoose");
const port = 8000;
const app = express();
app.use(express.json());
app.use(Router);
const connection = mongoose.connection;
mongoose.connect(
  "mongodb+srv://reflixb:Khulugjin1@cluster0.bdboddo.mongodb.net/to-do?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

connection.once("open", () => {
  console.log("connected");
});

app.listen(port, () => {
  console.log(port, " =>  success");
});
