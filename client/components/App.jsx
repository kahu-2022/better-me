import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Login from './Login'
import Register from './Register'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'



function App () {

  // useEffect(() => {

  // }, [])

  cacheUser(useAuth0)

  return (
    <>
      {/* <Register /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
      </Routes>

      
    </>
  )


}

export default App
