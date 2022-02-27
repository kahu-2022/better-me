import React from 'react'
import SignIn from './SignIn'
import SignOut from './SignOut'
import { useAuth0 } from '@auth0/auth0-react' 
import { Link } from 'react-router-dom'
import MyGoals from './MyGoals'
import CompletedGoals from './CompletedGoals'

const NavAuth = () => {

    // const { isAuthenticated } = useAuth0()
//  let authStat = true;
    return (
        // isAuthenticated && (
        <div className="nav-container"> 
            <div>
                <Link className="resolute-link" to='/'>Resolute. </Link>
            </div>
            <div className="links-container">
                <div className="myGoals-container"> 
                <Link to='/mygoals'>My Goals</Link>
                </div>
            
                <div className="completed-container">
                <Link to='/completed'>Completed </Link>
                </div>
            </div>
            
            <div className="auth-button-container"> 
                <SignOut/>
            </div>

            
            {/* <SignIn/> */}
        </div>
        )
    // ) 
}

export default NavAuth