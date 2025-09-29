const postModel = require("../models/post.model");
const generateCaption = require("../service/ai.service");
const uploadFile = require("../service/storage.service");
const { nanoid } = require("nanoid");

async function createPostController(req, res) {
  const file = req.file;
  console.log("File received", file);
  const base64ImageFile = Buffer.from(file.buffer).toString("base64");
  console.log(base64ImageFile);

  const caption = await generateCaption(base64ImageFile);
  const id = nanoid();
  const result = await uploadFile(file.buffer, `${id}`);
  const post = await postModel.create({
    image: result.url,
    caption: caption,
    user: req.user._id,
  });
  res.status(201).json({
    message: "post created successfully",
    post,
  });
}

module.exports = createPostController;
