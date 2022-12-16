const express = require("express");
const { login, registerUser } = require("../controllers/userController");
const router = express.Router();

router.route("/login").post(login);

router.route("/register").post(registerUser);


module.exports = router;
