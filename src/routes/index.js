const express = require("express");

const mainRouter = express.Router();

const welcomeRouter = require("./welcome");
const productsRouter = require("./products");
const productRouter = require("./product");
const searchRouter = require("./search");
const authRouter = require("./auth");
const imageUploadRouter = require("./imageUpload");

const checkToken = require("../helpers/middlewares/checkToken");

mainRouter.use("/", welcomeRouter); // localhost:8000
mainRouter.use("/products", productsRouter); // localhost:8000/products
mainRouter.use("/product", checkToken, productRouter); // localhost:8000/product
mainRouter.use("/search", searchRouter); // localhost:8000/search
mainRouter.use("/auth", authRouter); // localhost:8000/auth
mainRouter.use("/upload", imageUploadRouter); // localhost:8000/upload

module.exports = mainRouter;
