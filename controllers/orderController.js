const mongoose = require("mongoose")
let order_length = 0

// import order model
const Order = mongoose.model("Order")

// get all orders
const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find()
    return res.send(orders)
  } catch (err) {
    res.status(400)
    return res.send("Database query failed")
  }
}

const order_get = function(req, res){
  Order.find()
    .lean()
    .then(function (doc) {
      order_length = doc.length
      console.log(doc)
      res.render('order', {order_length: order_length, order: doc, user:req.user})
    })
}

module.exports = {
  getAllOrder, order_get 
}