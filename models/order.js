const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
  orderStatus: String,
  orderedTime: Date,
  orderedProduct: String,
  customerInfo: String,
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order