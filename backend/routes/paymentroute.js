const express = require("express")
const { processpayment ,sendapikey} = require("../controllers/paymentcontroller")
const router =express.Router()
const {isauthenticateduser} = require( "../middelware/auth")
router.route("/payment/process").post(isauthenticateduser,processpayment)
router.route("/stripeapikey").get(isauthenticateduser,sendapikey)
module.exports =router