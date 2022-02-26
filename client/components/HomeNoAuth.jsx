import React from 'react'
// import Login from './SignIn'
import { useAuth0 } from '@auth0/auth0-react' 

const HomeNoAuth = () => {

    const { isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
        <>
            <h3>Home page without Auth :(</h3>
            
        </>
    )
    )
}

export default HomeNoAuth
