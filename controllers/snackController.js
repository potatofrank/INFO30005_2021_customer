const mongoose = require("mongoose")
let menu_length = 0

// import snack model
const Snack = mongoose.model("Snack")

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
      console.log(doc)
      res.render('menu', {menu_length: menu_length, menu: doc, user:req.user})
    })
}

const cart_post = function (req, res){
  const {snack_name, price, first_name} = req.body
  let errors = []
  console.log(req.body)
}


module.exports = {
  getAllSnack, menu_get, cart_post //, updateAuthor, addAuthor
}