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
        
        <form>
            <input className="goalInput-text-box" type="text" placeholder="Enter your goal here..."></input>
        </form>

        <div className="goals-card">

            {/* To display goals */}
            <div>

            </div>

            <div>
                <button className="goals-card-button">
                    Submit
                </button>
            </div>
        </div>
        
    </>
    )
    )
}

export default HomeAuth