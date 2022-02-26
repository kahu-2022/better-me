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



function App () {

  return (
    <>
     
      <NavAuth />
      <NavNoAuth />
      <HomeAuth />
      <HomeNoAuth />
      <Routes>
        <Route path='/mygoals' element={<MyGoals />} />
        <Route path='/completed' element={<CompletedGoals />} />
      </Routes>
      
    </>
    
    
    
  )


}

export default App
