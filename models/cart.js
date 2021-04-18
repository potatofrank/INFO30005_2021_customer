const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
  snack_name: String,
  price: Number,
  details: String,
  add_on: String,
})

const Cart = mongoose.model("Cart", snackSchema)

module.exports = Cart