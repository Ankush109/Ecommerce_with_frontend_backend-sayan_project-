const express = require("express")
const { getallproducts,createproduct, updateproduct, deleteproduct, getproductdetails } = require("../controllers/productcontroller");
const {isauthenticateduser,authorizeroles} = require("../middelware/auth");
const router =express.Router()

router.route("/products").get(isauthenticateduser,authorizeroles("admin"),getallproducts);
router.route("/products/new").post(isauthenticateduser,createproduct);
router.route("/products/:id").put(isauthenticateduser,updateproduct).delete(isauthenticateduser,deleteproduct).get(isauthenticateduser,getproductdetails)
module.exports =router