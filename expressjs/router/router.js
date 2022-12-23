const express = require("express");

const router = express.Router();
const {
  getList,
  getUserById,
  getPosts,
  getUptade,
  getDelete,
} = require("../controller/controller.js");

const { getPostList } = require("../controller/postController.js");

router.get("/user", getList);
router.get("/user/:id", getUserById);
router.post("/post", getPosts);
router.patch("/uptade/:id", getUptade);
router.delete("/delete/:id", getDelete);

router.get("/post", getPostList);

module.exports = router;
