import React from 'react'
import SignIn from './SignIn'
import SignOut from './SignOut'
import { useAuth0 } from '@auth0/auth0-react' 
import { Link } from 'react-router-dom'
import MyGoals from './MyGoals'
import CompletedGoals from './CompletedGoals'

const NavAuth = () => {

    const { isAuthenticated } = useAuth0()

    return (
        isAuthenticated && (
        <>
            <Link to='/home'>Resolute.</Link>
            {/* <p>Current Goals</p>
            <p>Completed Goals</p> */}    
            <Link to='/mygoals'>My Goals</Link>
            <Link to='/completed'>Completed Goals</Link>


            <SignIn />
            <SignOut />
        </>
        )
    )
}

export default NavAuth