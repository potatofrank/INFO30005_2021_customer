const mongoose = require("mongoose")

const vendorSchema = new mongoose.Schema({
  vendor_id: String,
  location: String,
  isOpen: Boolean
})

const Vendor = mongoose.model("Vendor", vendorSchema)

module.exports = Vendor