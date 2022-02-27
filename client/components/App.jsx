import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react' 

import { Routes, Route } from 'react-router-dom'
import NavNoAuth from './NavNoAuth'
import NavAuth from './NavAuth'
import HomeAuth from './HomeAuth'
import HomeNoAuth from './HomeNoAuth'
import CompletedGoals from './CompletedGoals'
import MyGoals from './MyGoals'
import Divider from '@mui/material/Divider'
import { Margin } from '@mui/icons-material'
import Footer from './Footer'




function App () {

  return (
    <>
     
      <NavAuth />
      {/* <NavNoAuth /> */}
      <Divider sx={{ background: '#2C3333', mt: 3.5 }} variant="middle" />
      <HomeAuth />
      {/* <HomeNoAuth /> */}
      <Routes>
        <Route path='/mygoals' element={<MyGoals />} />
        <Route path='/completed' element={<CompletedGoals />} />
  
      </Routes>
      <Footer/>
    </>
    
    
    
  )


}

export default App
