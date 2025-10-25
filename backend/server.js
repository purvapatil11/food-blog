const express = require ("express")
const app = express()
const dotenv = require("dotenv").config()
const cors = require("cors")
const connectDB = require("./config/connectionDB")


const PORT = process.env.PORT 
connectDB()
app.use(express.json())
app.use(cors())


app.use("/",require("./routes/user"))
app.use("/recipie",require("./routes/recipie"))

app.listen(PORT,(err)=>{
    console.log(`server is listening on port ${PORT}`);
    })