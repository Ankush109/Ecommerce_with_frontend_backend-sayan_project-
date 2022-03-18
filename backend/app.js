const express= require("express")
const cookie =require("cookie-parser")
const app =express()
const errormiddleware = require("./middelware/error")
app.use(express.json())
app.use(cookie())
//route imports
const product =require("./routes/productrouter")
const user = require("./routes/userroutes")
const order =require("./routes/orderroute")
app.use("/api/v1",product)
app.use("/api/v1",user)
app.use("/api/v1",order)
// middelware for error
app.use(errormiddleware)
module.exports = app