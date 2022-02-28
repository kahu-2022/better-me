import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

const MyGoals = () => {
  const { isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
      <>

        <div className="mygoals-card">

          <h3><u>My Goals</u></h3>

          {/* To display goals */}
          <div></div>

        </div>

      </>
    )
  )
}

export default MyGoals
