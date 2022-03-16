const express = require("express")
const { getallproducts,createproduct, updateproduct, deleteproduct, getproductdetails } = require("../controllers/productcontroller")
const router =express.Router()

router.route("/products").get(getallproducts);
router.route("/products/new").post(createproduct);
router.route("/products/:id").put(updateproduct).delete(deleteproduct).get(getproductdetails)
module.exports =router