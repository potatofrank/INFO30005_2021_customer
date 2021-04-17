const express = require('express')
const app = express()
var path = require('path')
var createError = require('http-errors')
const session = require('express-session')
const flash = require('connect-flash')
app.use(express.json())  // replaces body-parser


// connect to models to routes
require('./models/database')
const snackRouter = require('./customer_routes/snackRouter')
const indexRouter = require('./index')
const vendorRouter = require('./vendor_routes/vendorRouter')
const customerRouter = require('./customer_routes/customerRouter')

//view engine set up
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(
  session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
  })
)

app.use(flash())
// Handle author-management requests
// the author routes are added onto the end of '/author-management'
app.use('/', indexRouter);
app.use('/snack', snackRouter)
app.use('/vendor', vendorRouter)
app.use('/customer', customerRouter)

//catch 404 and forward to error handler
app.use(function(req, res, next){
  next(createError(404));
})



app.listen(process.env.PORT || 3000, () => {
  console.log("The library app is running!")
})
