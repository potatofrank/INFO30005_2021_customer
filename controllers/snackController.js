const mongoose = require("mongoose")
let menu_length = 0
let menu_data = {}

// import snack model
const Snack = mongoose.model("Snack")
const Cart = mongoose.model("Cart")

// get all authors
const getAllSnack = async (req, res) => {
  try {
    const snacks = await Snack.find()
    return res.send(snacks)
  } catch (err) {
    res.status(400)
    return res.send("Database query failed")
  }
}

const menu_get = function(req, res){
  Snack.find()
    .lean()
    .then(function (doc) {
      menu_length = doc.length
      res.render('menu', {menu_length: menu_length, menu: doc, user:req.user})
    })
}

const cart_post = function (req, res){
  Snack.find()
    .lean()
    .then(function (doc) {
      menu_length = doc.length
      menu_data = doc
    })

  const {snack_name, price} = req.body

  const newCart = new Cart({
    snack_name,
    price
  })
  newCart
    .save()
    .then((cart) => {
      req.flash('messageSuccess', 'You have successfully added one item to cart')
      res.render("menu", {menu_length: menu_length, menu:menu_data, successMessage: req.flash("messageSuccess"), user: req.user})
    })
    .catch((err) => console.log(err))
}


module.exports = {
  getAllSnack, menu_get, cart_post //, updateAuthor, addAuthor
}