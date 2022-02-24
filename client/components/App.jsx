import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Login from './Login'
import Register from './Register'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App () {

  // useEffect(() => {

  // }, [])

  cacheUser(useAuth0)

  return (
    <>
      {/* <Login /> */}
      <Router>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
      </Router>

      
    </>
  )


}

export default App
