const mongoose = require("mongoose")
const { update } = require("../models/author")

// import snack model
const Vendor = mongoose.model("Vendor")

// get all vendors
const getAllVendor = async (req, res) => {
  try {
    const vendors = await Vendor.find()
    return res.send(vendors)
  } catch (err) {
    res.status(400)
    return res.send("Database query failed")
  }
}

//open a vender
const openVendor = async function (req, res){
    //get the vendor id and its location from req body
    const {vendor_id, location} = req.body
    let errors = []
    //validate fields
    if(!vendor_id || !location) {
        req.flash('vendorError', 'Please enter all fields')
        errors.push({msg: 'Please enter all fields'});
    }
    //check errors
    if(errors.length > 0){
        res.render("vendor", {
            errorMessage: req.flash("vendorError"),
            errors,
            vendor_id,
            location,
        })
    } else{
      //validate vendor existence from database
        Vendor.findOne({vendor_id: vendor_id}).then((vendor) => {
          if(!vendor){
              req.flash('vendorError', 'Vendor is not registered')
              res.render("vendor", {
                  errorMessage: req.flash('vendorError'),
                  errors,
                  vendor_id,
                  location,
              })
          }else{
            //change vendor status and location information
            Vendor.findByIdAndUpdate(
              vendor.id,
              {isOpen: true, location: location},
              {new:true},
              function(err, updatedVendor){
                if(err){
                  res.status(404).json({success:false,err})
                }else{
                  res.status(200).json({success:true, updatedVendor: updatedVendor})
                  //req.flash('vendorSuccess', 'Vendor is now open')
                  //res.render("vendor", {successMessage:req.flash("vendorSuccess")})
                }
              }
            )
          }
        })
    }
}

// remember to export the functions
module.exports = {
  getAllVendor, openVendor //, updateAuthor, addAuthor
}