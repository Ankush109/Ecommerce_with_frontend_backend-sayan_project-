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
exports.getallproducts = catchasyncerrors(async(req,res,next)=>{

    const resultperpage= 5;
    const productcount = await Product.countDocuments();
   const apifeatures = new  Apifeatures( Product.find(),req.query ).search().filter().pagination(resultperpage)
    const products =await apifeatures.query;
    res.status(200).json({
        success:true,
        products,
        productcount,
    })
})


//get all produts (admin)
exports.getallproductsadmin = catchasyncerrors(async(req,res,next)=>{

const products =await Product.find()
    res.status(200).json({
        success:true,
        products,
     
    })
})
//get all produts
exports.getallproductsop = catchasyncerrors(async(req,res,next)=>{


    const productcount = await Product.countDocuments();
   const apifeatures = new  Apifeatures( Product.find(),req.query ).search().filter()
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

//create new review or update the review
exports.createproductreview=catchasyncerrors(async(req,res,next)=>{
    const {rating,comment,productid}= req.body
    const review={
        user:req.user._id,
        name:req.user.name,
        rating:Number(rating),
        comment
    }
    const product =await Product.findById(productid);
    const isreviewed= product.reviews.find(rev=>rev.user.toString()===req.user._id.toString())
    if(isreviewed){
product.reviews.forEach(rev=>{

    if(rev.user.toString()===req.user._id.toString())
    rev.rating=rating,
    rev.comment=comment
})
    }else{
        product.reviews.push(review)
        product.numberofreviews=product.reviews.length
    }
    //rating logic
    let avg = 0
    product.ratings = product.reviews.forEach(rev=>{
        avg+=rev.rating
    })
    product.ratings =avg/product.reviews.length

await product.save({
    validateBeforeSave:false
})

res.status(200).json({
    success:true
})
})


//to get all reviews of a single product
exports.getprodutreviews =catchasyncerrors(async(req,res,next)=>{
    const product =await Product.findById(req.query.id)
    if(!product){
        return next(new Errorhandler("product not found",404))
    }
    res.status(200).json({
        success:true,
        reviews:product.reviews
    })
})
//delete review
exports.deleteproductreview =catchasyncerrors(async(req,res,next)=>{
    const product =await Product.findById(req.query.productid)
    if(!product){
        return next(new Errorhandler("product not found",404))
    }
   const reviews= product.reviews.filter(rev=>rev._id.toString()!=req.query.id.toString())
       //rating logic
       let avg = 0
     reviews.forEach(rev=>{
           avg+=rev.rating
       })
   const ratings =avg/reviews.length
   const numberofreviews = reviews.length;
   await Product.findByIdAndUpdate(req.query.productid,{
       reviews,
       ratings,
       numberofreviews,
   }),{
       new:true,
       runValidators:true,
       useFindAndModify:false
   }
   res.status(200).json({
       success:true
   })

})