const express = require('express')
const router = express.Router()
const snack_controller = require('../controllers/snackController')
const menu_controller = require('../controllers/menuController')

router.get('/menu', snack_controller.menu_get)

router.get('/menu/cart', menu_controller.cart_get)

router.post('/menu', snack_controller.cart_post)

module.exports = router