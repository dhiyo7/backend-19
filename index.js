const express = require("express");
const logger = require("morgan");
const cors = require("cors");
// cors => cross origin resource sharing

const mainRouter = require("./src/routes/index");

const app = express();

const port = 8000;

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

// memperbolehkan access dari semua origin
app.use(cors());

// menambahkan logger
app.use(logger("dev"));

// menambahkan parser untuk x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// extended: false => menggunakan qs
// extended: true => menggunakan querystring

// menambahkan parser untuk raw json
app.use(express.json());

app.use("/", mainRouter);

module.exports = app;
