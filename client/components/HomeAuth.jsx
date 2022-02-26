import React from 'react'
// import Nav from './NavNoAuth'
// import Login from './SignIn'
// import Logout from './SignOut'
import { useAuth0 } from '@auth0/auth0-react' 
// import { Routes, Route } from 'react-router-dom'

// import CompletedGoals from './CompletedGoals'
// import MyGoals from './MyGoals'

function HomeAuth() {
    const { isAuthenticated } = useAuth0();

    return(
    isAuthenticated && (

    <>
        
        
        
    </>
    )
    )
}

export default HomeAuth