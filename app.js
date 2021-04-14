const express = require('express')
const app = express()
app.use(express.json())  // replaces body-parser


// connect to models to routes
require('./models')
const authorRouter = require('./routes/authorRouter')
const snackRouter = require('./routes/snackRouter')


// GET home page
app.get('/', (req, res) => {
  console.log('connected')
  res.send('<h1>Library System</h1>')
})

// Handle author-management requests
// the author routes are added onto the end of '/author-management'
app.use('/author-management', authorRouter)
app.use('/snack-management', snackRouter)

app.listen(process.env.PORT || 3000, () => {
  console.log("The library app is running!")
})
