import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react' 

import { Routes, Route, Switch } from 'react-router-dom'
import NavNoAuth from './NavNoAuth'
import NavAuth from './NavAuth'
import HomeAuth from './HomeAuth'
import HomeNoAuth from './HomeNoAuth'
import CompletedGoals from './CompletedGoals'
import MyGoals from './MyGoals'
import Footer from './Footer'
import Divider from '@mui/material/Divider'



function App () {

  // const currentRoute = browser.windows.getCurrent()

  // if (currentRoute == )

  return (
    <>
     
      <NavAuth />
      <NavNoAuth />
      {/* <HomeAuth /> */}
      <Divider sx={{ background: '#2C3333', mt: 3.5 }} variant="middle" />
      <HomeNoAuth />
      <Routes>
          
          {/* <Route path='/' element={<HomeNoAuth />} /> */}
          <Route path='/' element={<HomeAuth />} />
          <Route path='/mygoals' element={<MyGoals />} />
          <Route path='/completed' element={<CompletedGoals />} />
      </Routes>

      <Footer />

     
      
    </>
    
    
    
  )


}

export default App
