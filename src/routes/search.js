const express = require("express");

const searchRouter = express.Router();
const searchController = require("../controllers/search");
// req.query

// localhost:8000/search?{query}

searchRouter.get("/", searchController.searchProduct);

module.exports = searchRouter;
