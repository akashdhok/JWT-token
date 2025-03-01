const userModel = require("../model/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const registrationData = async(req , res)=>{
   let{name , email , password} = req.body;
   try {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password , salt)
    let data = await userModel.create({
        name : name,
        email :email,
        password : hashPassword
    })
    res.send("okk")
   } catch (error) {
    console.log(error)
   }
}

const loginData = async(req , res)=>{
    const{email , password} = req.body;
    try {
        const data = await userModel.findOne({email : email})
        const hashPassword = await bcrypt.compare(password, data.password )
        if(!data)
        {
            res.send("invalid email")
        }
        if(!hashPassword)
        {
            res.send("Invalid password")
        }
       const token = await jwt.sign({id : data._id} , process.env.SECRET_KEY , {expiresIn : "30d"}) 
       res.send({token : token})
       
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    registrationData,
    loginData
}