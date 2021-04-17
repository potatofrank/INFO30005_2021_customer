const express = require('express')

// add our router 
const vendorRouter = express.Router()

// require the vendor controller
const vendorController = require('../controllers/vendorController.js')

// handle the GET request to get all vendors
vendorRouter.get('/', (req, res) => vendorController.getAllVendor(req, res))

vendorRouter.post('/vendorOpen', vendorController.openVendor)

// export the router
module.exports = vendorRouter