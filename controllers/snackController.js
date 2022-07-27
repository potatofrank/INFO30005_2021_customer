const mongoose = require("mongoose")
let menu_length = 0
let menu_data = {}
const Cart = require('../models/cart')
// import snack model
const Snack = mongoose.model("Snack")
const User = require("../models/user")
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

//render all snacks in the menu 
const menu_get = function(req, res){
  Snack.find()
    .lean()
    .then(function (doc) {
      menu_length = doc.length
      //render the cart item number when there are items in the cart, otherwise just render the menu page
      if(!req.session.cart){
        res.render('menu', {menu_length: menu_length, menu: doc, user:req.user})
      }else{
        var cart = new Cart(req.session.cart);
        res.render('menu', {menu_length: menu_length, menu: doc, user:req.user, totalQty:cart.totalQty})
      }
    })
}

const menu_post = function(req, res){
  const {van_name_1, van_name_2, van_name_3, van_name_4, van_name_5, user} = req.body
  var van_name = ''
  var obj = {}
  //console.log(van_name_1, van_name_2, van_name_3, van_name_4, van_name_5)
  if(!user){
    if(van_name_1){
      van_name = van_name_1
    }
    if(van_name_2){
      van_name = van_name_2
    }
    if(van_name_3){
      van_name = van_name_3
    }
    if(van_name_4){
      van_name = van_name_4
    }
    if(van_name_5){
      van_name = van_name_5
    }

    Snack.find()
      .lean()
      .then(function (doc) {
        menu_length = doc.length
        //render the cart item number when there are items in the cart, otherwise just render the menu page
        if(!req.session.cart){
          res.render('menu', {menu_length: menu_length, menu: doc, user:req.user, current_van: van_name})
        }else{
          var cart = new Cart(req.session.cart);
          res.render('menu', {menu_length: menu_length, menu: doc, user:req.user, totalQty:cart.totalQty, current_van: van_name})
        }
      })
  }else{
    obj = JSON.parse(user)
    if(van_name_1){
      van_name = van_name_1
    }
    if(van_name_2){
      van_name = van_name_2
    }
    if(van_name_3){
      van_name = van_name_3
    }
    if(van_name_4){
      van_name = van_name_4
    }
    if(van_name_5){
      van_name = van_name_5
    }
    User.findByIdAndUpdate(
      obj._id,
      {current_van: van_name},
      {new:true},
      function(err){
        if(err){
          res.status(404).json({success:false,err})
        }else{
          Snack.find()
            .lean()
            .then(function (doc) {
              menu_length = doc.length
              //render the cart item number when there are items in the cart, otherwise just render the menu page
              if(!req.session.cart){
                res.render('menu', {menu_length: menu_length, menu: doc, user:req.user, current_van: van_name})
              }else{
                var cart = new Cart(req.session.cart);
                res.render('menu', {menu_length: menu_length, menu: doc, user:req.user, totalQty:cart.totalQty, current_van: van_name})
              }
            })
        }
      })
  }
}
const future_get = function(req, res){
  
  res.render('future_development', {user:req.user})

}


//export all function
module.exports = {
  getAllSnack, menu_get, menu_post, future_get //, updateAuthor, addAuthor
}