const mongoose = require("mongoose")

//set up userSchema
const userSchema = new mongoose.Schema({
  last_name: String,
  first_name: String,
  email: String,
  password: String,
  userID: String,
  current_van: String,
  latestOrder: String,
  currently_rating: String,
})

const User = mongoose.model("User", userSchema)

module.exports = User