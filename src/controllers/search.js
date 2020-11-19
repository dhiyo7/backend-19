const searchModel = require("../models/search");
const form = require("../helpers/form");

module.exports = {
  searchProduct: (req, res) => {
    const { q } = req.query;
    const keyword = "%" + q + "%";
    searchModel
      .searchProduct(keyword)
      .then((data) => {
        form.success(res, data);
        // res.json(data);
      })
      .catch((err) => {
        form.error(res, err);
        // res.status(500).json(err);
      });
  },
};
