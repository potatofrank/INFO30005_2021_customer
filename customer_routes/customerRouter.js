const express = require('express')
const router = express.Router()
//declare controller variables to import different controllers
const snack_controller = require('../controllers/snackController')
const cart_controller = require('../controllers/cartController')
const login_controller = require('../controllers/loginController')
const order_controller = require('../controllers/orderController')
var { ensureAuthenticated } = require('../config/auth')

//handle the GET request to render all snacks
router.get('/menu', snack_controller.menu_get)

//handle the GET request to render all items in the cart
router.get('/menu/cart', ensureAuthenticated, cart_controller.cart_get)

//handle the POST request to confirm the order and add it to the database
router.post('/menu/cart', cart_controller.cart_post)

//handle the GET request to render the login page
router.get('/menu/login', login_controller.login_get)

//handle the POST request to authenticate user information
router.post('/menu/login', login_controller.login_post)

//handle the GET request to render the register page
router.get('/menu/login/register', login_controller.register_get)

//hand the POST request to register users
router.post('/menu/login/register', login_controller.register_post)

//handle the GET request to render the forgot_password page
router.get('/menu/login/forgot_password', login_controller.password_forget_get)

//handle the GET request to logout from current website
router.get('/menu/dashboard/logout', login_controller.logout_get)

//handle the GET request to render the user dashboard/profile page
router.get('/menu/dashboard', ensureAuthenticated, login_controller.dashboard_get)

//handle the GET request to add items to the cart
router.get('/menu/add-to-cart/:id', ensureAuthenticated, cart_controller.add_to_cart)

//handle the GET request to render the order history of a customer
router.get('/customer_order', ensureAuthenticated, order_controller.order_get)

//export routes
module.exports = router