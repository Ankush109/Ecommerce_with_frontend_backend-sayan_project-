const express = require("express")
const { getallproducts,createproduct, updateproduct, deleteproduct, getproductdetails } = require("../controllers/productcontroller");
const {isauthenticateduser,authorizeroles} = require("../middelware/auth");
const router =express.Router()

router.route("/products").get(getallproducts);
router.route("/products/new").post(isauthenticateduser,authorizeroles("admin"),createproduct);
router.route("/products/:id").put(isauthenticateduser,authorizeroles("admin"),updateproduct).delete(isauthenticateduser,deleteproduct).get(isauthenticateduser,authorizeroles("admin"),getproductdetails)
module.exports =router