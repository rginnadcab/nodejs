const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please Enter your name"]
    },
    email : {
        type : String,
        required : [true , "Please Enter your email"],
        unique : true,
        validate : [validator.isEmail, "Please enter a valid Email"]
    },
    password : {
        type : String,
        required : [true, "Please enter your password"],
        select : false
    },
  createdAt: {
    type: Date,
    default: Date.now,
  },
    
})

userSchema.methods.getJWTToken = function(){
    return jwt.sign({ id: this._id }, "SECRET", {
        expiresIn : 5000
    })
}

module.exports = mongoose.model("User",userSchema);

