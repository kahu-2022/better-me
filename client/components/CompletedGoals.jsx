import React from 'react'
import { useAuth0 } from '@auth0/auth0-react' 

const CompletedGoals = () => {

    // const { isAuthenticated } = useAuth0()

    return (
    
        <>
            <div className="mygoals-card">

            
                <h3><u>Completed Goals</u></h3>


                {/* To display goals */}
                <div></div>

            </div>
            
            {console.log('Completed Goals')}
        </>
    )
}

export default CompletedGoals
