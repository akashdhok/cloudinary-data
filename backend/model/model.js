const mongoose = require("mongoose")


const userSchema= mongoose.Schema({
    name : String,
    email : String,
    city : String,
    imageurl : String
})



module.exports = mongoose.model("collect" , userSchema)