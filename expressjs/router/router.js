const express = require("express");

const Router = express.Router();
const {
  getList,
  addData,
  uptadeData,
  //   patchItem,
} = require("../controller/controller.js");

Router.get("/get", getList);
Router.post("/add", addData);
Router.patch("/patch", uptadeData);
//   .delete("/delete", deleteItem)
//   .patch("/patch", patchItem);

module.exports = Router;
