const mongoose = require("mongoose")
const { collection } = require("../models/author")

// import snack model
const Vendor = mongoose.model("Vendor")

// get all authors
const getAllVendor = async (req, res) => {
  try {
    const vendors = await Vendor.find()
    return res.send(vendors)
  } catch (err) {
    res.status(400)
    return res.send("Database query failed")
  }
}

const openVendor = function (req, res){
    const {vendor_id, location} = req.body
    let errors = []
    if(!vendor_id || !location) {
        req.flash('vendorError', 'Please enter all fields')
        errors.push({msg: 'Please enter all fields'});
    }

    if(errors.length > 0){
        res.render("vendor", {
            errorMessage: req.flash("vendorError"),
            errors,
            vendor_id,
            location,
        })
    } else{
        Vendor.findOne({vendor_id: vendor_id}).then((vendor) => {
            console.log(vendor)
            if(!vendor){
                req.flash('vendorError', 'Vendor is not registered')
                res.render("vendor", {
                    errorMessage: req.flash('vendorError'),
                    errors,
                    vendor_id,
                    location,
                })
            }else{
              /*
              const filter = {vendor_id: vendor_id}

              const updateDocument = {
                $set: {
                  isOpen: true,
                }
              }

              //const result = await collection.updateOne(filter, updateDocument)*/
            }
        })
    }

}

// remember to export the functions
module.exports = {
  getAllVendor, openVendor //, updateAuthor, addAuthor
}