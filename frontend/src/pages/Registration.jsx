import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Registration = () => {
  const[input , setInput] = useState({})
  const  navigate = useNavigate()
  const changeHandler = (e)=>{
    let{name , value} = e.target;
    setInput({
      ...input,
      [name] : value
    })
  }
  const submitHandler = async()=>{
    let api = "http://localhost:8000/user/registration"
    try {
      let res = await axios.post(api , input)
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <h1 align="center">Registration Page</h1>
    Enter Name : <input type="text" name="name" onChange={changeHandler} />
      <br />
      Enter Email : <input type="text" name="email" onChange={changeHandler} />
      <br />
      Enter Password: <input type="password" name="password" onChange={changeHandler} />
      <br />
      <button onClick={submitHandler}>Login</button>
    
    </>
  )
}

export default Registration