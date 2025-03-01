import React, { useEffect } from 'react'

const Home = () => {
  const userAuthenticate = ()=>{
    let token = localStorage.getItem("token")
    if(token)
    {
      let api = "http://localhost:8000/user/authenticate"
    }
  }
  useEffect(()=>{
    userAuthenticate()
  },[])
  return (
    <>
    <h1 align = "center">This is home page</h1>
    </>
  )
}

export default Home