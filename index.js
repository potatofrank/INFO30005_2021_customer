const express = require('express');
const router = express.Router();

const vendorController = require('./controllers/vendorController.js')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('homepage', {user:req.user});
});

router.get('/customer', function(req, res) {
  res.render('customer', {user:req.user});
})

router.get('/vendor', function(req, res) {
  res.render('vendor', {user:req.user});
})

router.post('/vendor', vendorController.openVendor)


module.exports = router;
