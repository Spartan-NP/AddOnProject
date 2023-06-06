const express = require("express");
const APIRouter = express.Router();
const productList = require("../Controller/ProductController");
const productListById = require("../Controller/ProductListByIdController");
const payment = require("../Controller/PaymentController");


APIRouter.get("/get-product-list", productList.getProductList);
APIRouter.get(
  "/get-product-list-by-id/:id",
  productListById.getProductListById
);
APIRouter.get("/get-product-by-id/:id", productListById.getProductById);
APIRouter.get("/save-data",payment.getSave);

APIRouter.post("/create-order", payment.createOrder);
APIRouter.post("/verify-payment", payment.verify);

module.exports = APIRouter;
