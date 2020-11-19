const db = require("../configs/mySQL");

module.exports = {
  searchProduct: (keyword) => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_qty, p.created_at, p.updated_at FROM products AS p JOIN category AS c ON c.id = p.category_id WHERE p.product_name LIKE ?";
      db.query(qs, keyword, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};
