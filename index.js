const express = require("express");

const app = express();

const port = 8000;

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

// localhost:8000/products
// endpoint => /products
// localhost:8000/
// endpoint => /

// membuat handler untuk endpoint /
app.get("/", (req, res) => {
  res.send("Selamat Datang");
});
