const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    order_list: { type: Object, require: true },
    username: { type: String, require: true },
    email: { type: String, require: true },
    mobile: { type: Number, require: true },
    address: { type: String, require: true },
    total_price: { type: Number, require: true },
    order_id: { type: String, require: true },
    payment_id: { type: String, require: true },
    order_status: { type: Boolean, require: true },
  },
  {
    versionKey: false,
  }
);

const OrderModel = mongoose.model("order", OrderSchema, "orders");

module.exports = OrderModel;
