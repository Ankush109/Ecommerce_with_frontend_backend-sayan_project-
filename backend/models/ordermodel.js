 const mongoose = require("mongoose")
const orderschema =new mongoose.Schema({
    shippinginfo:{
        address:{type:String},
        city:{type:String},
        state:{type:String},
        country:{type:String},
        pincode:{
            type:Number,
            
        },
        phonenumber:{
            type:Number,
            
        }

    },
    orderitems:[
    {
        name:{
        type:String,
      },
        phonenumber:{
            type:Number,
    
        },
        quantity:{
            type:Number,
   
        },
        image:{
            type:String,
   
        },
        product:{
            type:mongoose.Schema.ObjectId,
            ref:"product",

        }
    }
],
user:{
    type:mongoose.Schema.ObjectId,
    ref:"user",
  
},
paymentinfo:{
    id:{
        type:String,
        
    }
},
paidat:{
    type:Date,
    
},
itemprice:{
    type:Number,
    default:0,
   
},
taxprice:{
    type:Number,
    default:0,
 

},
shipingprice:{
    type:Number,
    default:0,
   

},
totalprice:{
type:String,
default:0
},
orderstatus:{
    type:String,

    default:"proccessing"
},

delivered:Date,
createdat:{
    type:Date,
    default:Date.now
}
})
module.exports =mongoose.model("order",orderschema)