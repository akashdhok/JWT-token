const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const Port = process.env.PORT ||8000
const userRoute = require("./routes/userRoute")
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("DB Connected")
})
app.use("/user" , userRoute)

app.listen(Port , ()=>{
    console.log("listening at the port of 8000")
})