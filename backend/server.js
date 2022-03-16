const app =require("./app")

const dotenv =require("dotenv")
const connectdatabase =require("./config/database")
//config
dotenv.config({path:"backend/config/config.env"})
//connecting to the database :
connectdatabase();
app.listen(process.env.PORT,()=>{
    console.log(`server is working on ${process.env.PORT }`);
})