import React from 'react'
// import Login from './SignIn'
import { useAuth0 } from '@auth0/auth0-react' 

const HomeNoAuth = () => {

    const { isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
        <>

        <form>
            <input className="goalInput-NoAuth" type="text" placeholder="Sign in or register to start adding goals..." disabled></input>
        </form>

        <div className="goals-card">

            {/* To display goals */}
            <div>

            </div>

            <div>
                <button className="goals-button-noauth">
                    Submit
                </button>
            </div>
        </div>

            {console.log(`Home page without Auth :(`)}
            
        </>
    )
    )
}

export default HomeNoAuth
