const mongoose = require("mongoose")
let order_length = 0

// import order model
const Order = mongoose.model("Order")

// get all orders
const order_get = function(req, res){
  Order.find()
    .lean()
    .then(function (doc) {
        res.render("customer_order", {orders: doc, user: req.user})
    })
}

// get all orders
const vendor_order_get = function(req, res){
  Order.find()
    .lean()
    .then(function (doc) {
        res.render("order", {orders: doc, user: req.user})
    })
}


const complete_order = async function (req, res){
  //get the order id from the req body
  const {OrderID} = req.body
  let errors = []
  console.log(req.body)

  //push error when no id is specified 
  if(!OrderID) {
    req.flash('orderError', 'This order does not exsist')
    errors.push({msg: 'this order dose not exsist'})
  }
  
  //render error if there's anu
  if(errors.length > 0) {
    res.render("order", {
      errorMessage: req.flash("orderError"),
      errors,
      OrderID,
    })
  } else {
    //when there's no such order return error
    Order.findOne({OrderID: OrderID}).then((order) => {
      if (!order){
        req.flash('orderError', 'this order dose not exsist')
        res.render("order", {
          errorMessage: req.flash('orderError'),
          OrderID,
          errors,
          OrderID,
        })
      } else {
        //update error
        Order.findByIdAndUpdate(
          order.id,
          {OrderStatus: "Fulfilled"},
          {new:true},
          function(err, updatedOrder){
            if(err){
               res.status(404).json({success:false,err})
            }else{
              Order.find()
                .lean()
                .then(function (doc) {
                    res.status(200).json({success:true, updatedOrder: updatedOrder})
                  //req.flash('orderSuccess', 'One order has been fulfilled')
                  //res.render("order", {order_length: order_length, order:doc, successMessage:req.flash("orderSuccess")})
                })
            }
          })
      }
    })
  }
}

module.exports = {
  order_get, complete_order, vendor_order_get
}