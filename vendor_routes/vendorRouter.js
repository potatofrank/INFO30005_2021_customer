const express = require('express')

// add our router 
const vendorRouter = express.Router()

// require the vendor controller
const orderController = require('../controllers/orderController.js')

// handle the GET request to get all vendors
//.getAllVendor(req, res))

// handle the GET request to get all orders
vendorRouter.get('/order', orderController.vendor_order_get)

// handle the POST request to set order details
vendorRouter.post('/order', orderController.complete_order)

// export the router
module.exports = vendorRouter