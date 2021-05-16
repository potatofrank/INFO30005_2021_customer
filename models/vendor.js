const mongoose = require("mongoose")

//set up vendorSchema
const vendorSchema = new mongoose.Schema({
  vendor_id: String,
  location: String,
  isOpen: Boolean
})

const Vendor = mongoose.model("Vendor", vendorSchema)

module.exports = Vendor