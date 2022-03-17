const Product = require("../models/productmodels")
const catchasyncerrors = require("../middelware/catchasyncerror")
const Errorhandler = require("../utils/errorhandler");
const Apifeatures = require("../utils/apifeatures");

//create product:- admin
exports.createproduct =catchasyncerrors(async (req,res)=>{
    req.body.user = req.user.id
    const product =await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
})
//get all produts
exports.getallproducts = catchasyncerrors(async(req,res)=>{
    const resultperpage= 5;
    const productcount = await Product.countDocuments();
   const apifeatures = new  Apifeatures( Product.find(),req.query ).search().filter().pagination(resultperpage)
    const products =await apifeatures.query;
    res.status(200).json({
        success:true,
        products,
        productcount
    })
})
//update product --admin
exports.updateproduct = catchasyncerrors(async (req,res,next)=>{

    let product =await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }
    product =await Product.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({
        success:true,
        product
    })
})

//delete product :-
exports.deleteproduct =catchasyncerrors(async (req,res,next)=>{
    const product =await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }
    await product.remove()
    res.status(200).json({
        success:true,
        message:"product deleted"
    })
})
//get product details:
exports.getproductdetails =catchasyncerrors(async(req,res,next)=>{
    const product =await Product.findById(req.params.id);
    if(!product){
        return next(new Errorhandler("product not found",404))
    }
    res.status(200).json({
        success:true,
        product
    })
})