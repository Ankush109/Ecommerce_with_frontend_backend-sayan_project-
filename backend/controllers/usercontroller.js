const catchasyncerrors = require("../middelware/catchasyncerror")
const Errorhandler = require("../utils/errorhandler");
const User = require("../models/usermodels")
const sendToken = require("../utils/jwttoken")
exports.registername =catchasyncerrors(async(req,res,next)=>{
    const{name,email,password}= req.body
    const user = await User.create({

        name,
        email,
        password,
        avatar:{
            public_id:"this is sample id",
            url:"profilepic"
        }

    })
    sendToken(user,201,res)
})

//login user 
exports.loginuser = catchasyncerrors(async (req,res,next)=>{
    const {email,password} = req.body
    //checking if user has given password and email both
    if(!email || !password){
        return next(new Errorhandler("please enter email & password",400))
    }
    const user = await User.findOne({email}).select("+password")
    if(!user){
        return next(new Errorhandler("invalid email or password",401))
    }
    const ispassword =user.comparePassword(password)
    if(!ispassword){
        return next(new Errorhandler("invalid email or password",401))
    }
   sendToken(user,200,res)
})
//logout user 
exports.logout = catchasyncerrors(async (req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    res.status(200).json({
        success:true,
        message:"logged out"
    })
})