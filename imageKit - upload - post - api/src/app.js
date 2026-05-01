const express = require("express");
const app = express();
const dbModel = require("./model/db.model");
const uploadFile = require("./services/imagekit.sdk");

app.use(express.json());
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

app.post("/create_post", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  const response = await uploadFile(req.file.buffer);
  console.log(response);

  const post = await dbModel.create({
    image: response.url,
    caption: req.body.caption,
  });
  return res.status(201).json({
    message: "successfully created",
    post,
  });
});

app.get("/posts", async (req, res) => {
  const posts = await dbModel.find();
  return res.status(200).json({
    message: "successfully fetched",
    posts: posts,
  });
});

module.exports = app;
