const express = require('express');
const router = express.Router();

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

router.post('/test', function(req, res){
  console.log("I'm inside the post method")
  console.log(req.body)
})

module.exports = router;
