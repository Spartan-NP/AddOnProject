const mongoose = require("mongoose");

const ProductListByIdSchema = new mongoose.Schema({
  description: { type: String },
  aggregate_rating: { type: Number },
  rating_text: { type: String },
  min_price: { type: Number },
  image: { type: String },
  product_id: { type: Number },
});

const ProductListByIdModel  =  mongoose.model(
    "productList",
    ProductListByIdSchema,
    "productLists"
  );
  
  module.exports = ProductListByIdModel;