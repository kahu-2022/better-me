import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

// add redux and state to go grab goals from the database and show the completed goals

const CompletedGoals = () => {
  const { isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (

      <>
        <div className="mygoals-card">

          <h3><u>Completed Goals</u></h3>

          {/* To display goals */}
          <div></div>

        </div>

      </>
    )
  )
}

export default CompletedGoals
