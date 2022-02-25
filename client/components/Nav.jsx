import React from 'react'
import Login from './Login'
import Logout from './Logout'
import { useAuth0 } from '@auth0/auth0-react' 

const Nav = () => {

    const { user } = useAuth0()

    return (
        <>
            <Login />
            <Logout />
        </>
    )
}

export default Nav
