const catchasyncerrors = require("../middelware/catchasyncerror")
const Errorhandler = require("../utils/errorhandler");
const User = require("../models/usermodels")
const sendToken = require("../utils/jwttoken")
const sendEmail =require("../utils/sendemail")
const crypto =require("crypto")
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


//forgot password
exports.frogotpassword = catchasyncerrors(async (req,res,next)=>{
    const user = await User.findOne({email:req.body.email})
    if(!user){
        return next(new Errorhandler("user not found",404))
    }
    //get reset password token
    const resettoken =user.getresetpasswordtoken()
    await user.save({valiateBeforeSave:false})

    const resetpasswordurl = `http://localhost/api/v1/password/reset/${resettoken}`
const message=`your password reset token is:- \n \n ${resetpasswordurl} \n\n if you have not requested this email please ignore it`
try {
    await sendEmail({
 email:user.email,
 subject:`eccomerce password  recovery`,
 message
    })
    res.status(200).json({
        success:true,
        message:`email sent to ${user.email} successfully`
    })
} catch (error) {
    user.getresetpasswordtoken =undefined;
    user.resetpasswordexpire =undefined
    await user.save({valiateBeforeSave:false})
    return next(new Errorhandler(error.message,500))
}
})
exports.resetpassword =catchasyncerrors(async(req,res,next)=>{
    //creating token hash
    const resetpassword =crypto.createHash("sha256").update(req.params.token).digest("hex")
    const user = await User.findOne({
        getresetpasswordtoken,
        resetpasswordexpire:{$gt:Date.now()}
    })
    if(!user){
        return next(new Errorhandler("reset password token is invalid or has been expired",400))
    }
    if(req.body.password!== req.body.confirmpassword){
        return next(new Errorhandler("passwords doest match",400))
    }
    user.password =req.body.password;
    user.getresetpasswordtoken=undefined;
    user.resetpasswordexpire= undefined;
  await  user.save()
  sendToken(user,200,res)
})
//update user profile
exports.updateprofile=catchasyncerrors(async (req,res,next)=>{
    const newUserdata ={
        name:req.body.name,
        email:req.body.email,

    }
    //we will add cloudinary later

    const user  = await User.findByIdAndUpdate(req.user.id,newUserdata,{
        new:true,
        runValidators:true,
        userFindAndModify:true,
    })

    res.status(200).json({
        success:true
    })


})

//get all users:- (admin)
exports.getalluser =catchasyncerrors(async(req,res,next)=>{
    const user =await User.find()
    res.status(200).json({
        success:true,
        user
    })
})

//get single user:- (admin)
exports.getsingleuser =catchasyncerrors(async(req,res,next)=>{
    const user =await User.findById(req.params.id)
    if(!user){
        return next(new Errorhandler(`user does not exist with id: ${req.params.id}`))
    }

    res.status(200).json({
        success:true,
        user
    })
})