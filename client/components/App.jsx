import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Login from './Login'
import { useAuth0 } from '@auth0/auth0-react' 
import Logout from './Logout'
import Profile from './Profile'




// import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import HomeAuth from './HomeAuth'
import HomeNoAuth from './HomeNoAuth'



function App () {

  return (
    <>
      {/* <Login />
      <Logout /> */}
      <Nav />
      <Profile />
      <HomeAuth />
      <HomeNoAuth />
    </>
    
    
    
  )


}

export default App
