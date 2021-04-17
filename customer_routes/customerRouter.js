const express = require('express')
const router = express.Router()
const snack_controller = require('../controllers/snackController')

router.get('/menu', snack_controller.menu_get)

module.exports = router