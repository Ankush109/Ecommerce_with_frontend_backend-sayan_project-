const express= require("express")

const app =express()
const errormiddleware = require("./middelware/error")
app.use(express.json())
//route imports
const product =require("./routes/productrouter")
app.use("/api/v1",product)
// middelware for error
app.use(errormiddleware)
module.exports = app