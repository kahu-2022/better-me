import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import SignIn from './SignIn'

const NavNoAuth = () => {
  const { isAuthenticated } = useAuth0()

  return (
    !isAuthenticated && (
      <div className="nav-container">
        <div >
          <div>
            <Link className="resolute-link" to='/'>Resolute. </Link>
          </div>
        </div>

        <div className="na-button-cont">
          <SignIn/>
        </div>
      </div>
    )
  )
}

export default NavNoAuth
