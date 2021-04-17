const express = require('express')
const router = express.Router()

router.get('/menu', function(req, res) {
    res.render('menu', {user:req.user});
  })

module.exports = router