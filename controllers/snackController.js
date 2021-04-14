const mongoose = require("mongoose")

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


// change an author (POST)

// add an author (POST)


// remember to export the functions
module.exports = {
  getAllSnack //, updateAuthor, addAuthor
}