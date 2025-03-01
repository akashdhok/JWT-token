import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
    <>
    <Link to="home">Home</Link> | 
    <Link to="registration">Registration</Link> | 
    <Link to="login">Login</Link> | 

    </>
  )
}

export default TopNav