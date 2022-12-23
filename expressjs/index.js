const express = require("express");
const router = require("./router/router.js");
const mongoose = require("mongoose");
const port = 8000;
const app = express();
app.use(express.json());
app.use(router);
const connection = mongoose.connection;
const URI =
  "mongodb+srv://reflixb:Khulugjin1@Cluster0.bdboddo.mongodb.net/Database?retryWrites=true&w=majority";

mongoose.connect(URI);

connection.once("open", () => {
  console.log("connected");
});

app.listen(port, () => {
  console.log(port, " =>  success");
});
