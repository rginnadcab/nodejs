const express = require("express");
const { login, registerUser, allUserList, logout } = require("../controllers/userController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/login").post(login);

router.route("/register").post(registerUser);

router.route("/logout").get(logout);

router.route("/all_users").get(isAuthenticatedUser,allUserList);


module.exports = router;
