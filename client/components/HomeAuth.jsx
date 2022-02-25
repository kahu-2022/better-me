import React from 'react'
import Nav from './Nav'
import Login from './Login'
import Logout from './Logout'
import { useAuth0 } from '@auth0/auth0-react' 

function HomeAuth() {
    const { isAuthenticated } = useAuth0();

    return(
    isAuthenticated && (

    <>
        <h1>Home page with Auth!</h1>
        
        {/* <Login />
        <Logout /> */}
    </>
    )
    )
}

export default HomeAuth