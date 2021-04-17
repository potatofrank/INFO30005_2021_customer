const express = require('express')

// add our router 
const snackRouter = express.Router()

// require the author controller
const snackController = require('../controllers/snackController.js')

// handle the GET request to get all authors
snackRouter.get('/', (req, res) => snackController.getAllSnack(req, res))

// export the router
module.exports = snackRouter