const imageUploadRouter = require("express").Router();

const singleUpload = require("../helpers/middlewares/upload");

imageUploadRouter.post("/", singleUpload, (req, res) => {
  const filePath = "/images/" + req.file.filename;
  res.json({
    filePath,
  });
});

module.exports = imageUploadRouter;
