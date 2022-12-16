const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const User = require("../models/userModel");


exports.login =  catchAsyncErrors(async(req,res,next) => {
    console.log(req.body);

    res.status(200).json({
        success : true,      
    })
})


    // Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {   
    const user = await User.create(req.body);        
    sendToken(user, 201, res);       
});