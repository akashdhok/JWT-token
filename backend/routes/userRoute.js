const express = require("express")
const route = express.Router()
const controller = require("../controller/userController")
route.post("/registration" , controller.registrationData)
route.post("/login" , controller.loginData)



module.exports  = route