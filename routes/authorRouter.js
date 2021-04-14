const express = require('express')

// add our router 
const authorRouter = express.Router()

// require the author controller
const authorController = require('../controllers/authorController.js')

// handle the GET request to get all authors
authorRouter.get('/', (req, res) => authorController.getAllAuthors(req, res))

// handle the GET request to get one author
authorRouter.get('/:authorId', (req, res) => authorController.getOneAuthor(req, res))

// handle POST requests to add one author
authorRouter.post('/', (req, res) => authorController.addAuthor(req, res))

// handle POST requests to update an author
authorRouter.post('/update', (req, res) => authorController.updateAuthor(req, res))

// export the router
module.exports = authorRouter