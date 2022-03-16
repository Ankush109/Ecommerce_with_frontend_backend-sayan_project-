const mongoose =require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userschema  =new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"],
        maxlength:[30,"cannot exceed 30 characters"],
        minlength:[4,"cannot be more than 5 characters"]

    },
    email:{
        type:String,
        required:[true,"please enter your email"],
        unique:true,
        validate:[validator.isEmail,"please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"please enter your password"],
        minlength:[8,"password should be more than 8 characters"],
        select:false,
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user"
    },
    resetpassword:String,
    resetpasswordexpire:Date
})
userschema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
this.password = await bcrypt.hash(this.password,10)
})
//jwt token
userschema.methods.getJWTtoken =function(){
return jwt.sign({id:this._id},process.env.JWT_SECRET,{
    expiresIn:process.env.JWT_EXPIRE

})
}

//comapare  password 
userschema.methods.comparePassword = async function(enteredpassword){
    return await bcrypt.compare(enteredpassword,this.password)
}



module.exports = mongoose.model("user",userschema)