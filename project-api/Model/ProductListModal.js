const mongoose = require("mongoose");

const ProductListSchema = new mongoose.Schema({
  name: { type: String, require: true },
  image: { type: String, require: true },
  product_id: { type: Number, require: true },
});

const ProductListModel = mongoose.model(
  "product",
  ProductListSchema,
  "products"
);

module.exports = ProductListModel;
