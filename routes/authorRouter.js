const express = require('express')

// add our router 
const authorRouter = express.Router()

// require the author controller
const authorController = require('../controllers/authorController.js')

// handle the GET request toget all authors
authorRouter.get('/', authorController.getAllAuthors)

// export the router
module.exports = authorRouter