import React from 'react'
import Login from './Login'
import { useAuth0 } from '@auth0/auth0-react' 

const HomeNoAuth = () => {

    const { isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
        <>
            <h1>Home page without Auth</h1>
            
        </>
    )
    )
}

export default HomeNoAuth
