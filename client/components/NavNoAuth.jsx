import React from 'react'
import SignIn from './SignIn'
import SignOut from './SignOut'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom' 

const NavNoAuth = () => {

    // const { isAuthenticated } = useAuth0()

    return (
        // !isAuthenticated && (
        <>
            <Link to='/'>Resolute.   </Link>
            <SignIn />
            <SignOut />
        </>
        )
    // )
}

export default NavNoAuth
