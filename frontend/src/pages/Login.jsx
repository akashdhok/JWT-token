import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const[email , setEmail] = useState("")
  const [password , setPassword] = useState("")
const navigate = useNavigate()

  const submitHandler = async()=>{
    let api = "http://localhost:8000/user/login"
    try {
      let res = await axios.post(api , {email : email , password : password})
      localStorage.setItem("token" , res.data.token)
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <h1 align="center">Login Page</h1>
      Enter Email : <input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}} />
      <br />
      Enter Password: <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} />
      <br />
      <button onClick={submitHandler}>Login</button>
    </>
  );
};

export default Login;
