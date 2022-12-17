const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorhander");


exports.login =  catchAsyncErrors(async(req,res,next) => {
    const { email,password } = req.body;

    if(!email || !password){
        return next(new ErrorHandler("Please Enter email and password",400));
    }

    const user = await User.findOne({ email }).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid email or password",401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401));
    }

    sendToken(user, 200, res);
})


    // Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {   
    const user = await User.create(req.body);        
    sendToken(user, 201, res);       
});

// Logout User
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  });
  

exports.allUserList = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();
    
    res.status(200).json({
        success : true,
        users
    })
})