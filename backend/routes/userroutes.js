const express = require("express")
const { registername, loginuser, logout } = require("../controllers/usercontroller")
const router =express.Router()
router.route("/register").post(registername)
router.route("/login").post(loginuser)
router.route("/logout").get(logout)
module.exports =router