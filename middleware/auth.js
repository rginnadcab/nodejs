const ErrorHandler = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncErrors(async(req,res,next) => {
    const { token } = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please Login to access this resource",401));
    }

    const decodeData = jwt.verify(token,"SECRET");

    req.user = await User.findById(decodeData.id);

    next();
})