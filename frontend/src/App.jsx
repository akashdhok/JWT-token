import React from 'react'
import {Routes , Route} from "react-router-dom"
import Layout from './Layout'
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
const App = () => {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Layout/>}>
       <Route index element = {<Home/>}/>
       <Route path='home' element = {<Home/>}/>
       <Route path='registration' element = {<Registration/>}/>
       <Route path='login' element = {<Login/>}/>


      </Route>
    </Routes>
    </>
  )
}

export default App