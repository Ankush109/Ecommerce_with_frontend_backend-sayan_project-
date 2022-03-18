 const mongoose = require("mongoose")
const orderschema =new mongoose.Schema({
    shippinginfo:{
        address:{type:String,required:true},
        city:{type:String,required:true},
        state:{type:String,required:true},
        country:{type:String,required:true},
        pincode:{
            type:Number,
            required:true,
        },
        phonenumber:{
            type:Number,
            required:true
        }

    },
    orderitems:[
    {
        name:{
        type:String,
        required:true
        },
        phonenumber:{
            type:Number,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        product:{
            type:mongoose.Schema.ObjectId,
            ref:"product",
            required:true
        }
    }
],
user:{
    type:mongoose.Schema.ObjectId,
    ref:"user",
    required:true,
},
paymentinfo:{
    id:{
        type:String,
        required:true
    }
},
paidat:{
    type:Date,
    required:true
},
itemprice:{
    type:Number,
    default:0,
    required:true
},
taxprice:{
    type:Number,
    default:0,
    required:true

},
shipingprice:{
    type:Number,
    default:0,
    required:true

},
totalprice:{
type:String,
required:true,
default:0
},
orderstatus:{
    type:String,
    required:true,
    default:"proccessing"
},

delivered:Date,
createdat:{
    type:Date,
    default:Date.now
}
})
module.exports =mongoose.model("order",orderschema)