const express = require("express");

const productsRouter = express.Router();

const db = require("../configs/mySQL");
const form = require("../helpers/form");

// localhost:8000/products
// GET

productsRouter.get("/", (req, res) => {
  const getAllProducts = new Promise((resolve, reject) => {
    const { query } = req;
    const limit = Number(query.limit) || 2;
    const page = Number(query.page) || 1;
    // limit  = 5
    // page   = 1 2 3  4
    // offset = 0 5 10 15
    // offset = (page-1)*limit
    const offset = (page - 1) * limit || 0;
    const queryString =
      "SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_qty, p.created_at, p.updated_at FROM products AS p JOIN category AS c ON c.id = p.category_id LIMIT ? OFFSET ?";
    db.query(queryString, [limit, offset], (err, data) => {
      const newResult = {
        products: data,
        pageInfo: {
          currentPage: page,
          previousPage:
            page === 1 ? null : `/products?page=${page - 1}&limit=${limit}`,
          nextPage: `/products?page=${page + 1}&limit=${limit}`,
        },
      };
      if (!err) {
        resolve(newResult);
      } else {
        reject(err);
      }
    });
  });
  getAllProducts
    .then((data) => {
      // res.json(data);
      form.success(res, data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// localhost:8000/products
// POST

productsRouter.post("/", (req, res) => {
  // mendapat objek request dari client
  // melakukan query ke db
  // mengirim response
  const { body } = req;
  const insertBody = {
    ...body,
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now()),
  };
  const postNewProduct = new Promise((resolve, reject) => {
    const qs = "INSERT INTO products SET ?";
    db.query(qs, insertBody, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
  postNewProduct
    .then((data) => {
      const resObject = {
        msg: "Data berhasil dimasukkan",
        data: { id: data.insertId, ...insertBody },
      };
      res.json(resObject);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = productsRouter;
