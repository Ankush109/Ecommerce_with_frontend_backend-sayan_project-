const catchasyncerrors = require("../middelware/catchasyncerror")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
exports.processpayment = catchasyncerrors(async(req,res,next)=>{
const mypayment =await stripe.paymentIntents.create({
    amount:req.body.amount,
    currency:"inr",
    metadata:{
        company:"adat"
    }
})

res.status(200).json({success:true,client_secret:mypayment.client_secret})
})
exports.sendapikey = catchasyncerrors(async(req,res,next)=>{

    
    res.status(200).json({stripeapikey:process.env.STRIPE_API_KEY})
    })