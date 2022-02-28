import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import HomeAuth from './HomeAuth';


const SignIn = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();


  return (
    !isAuthenticated && (
      <button className="noauth-button" onClick={() => loginWithRedirect()}>
        Sign In
      </button>
  )
  )
}

export default SignIn
