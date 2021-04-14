const mongoose = require("mongoose")

const snackSchema = new mongoose.Schema({
  snack_name: String,
  snack_id: String,
})

const Snack = mongoose.model("Snack", snackSchema)

module.exports = Snack