import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

const HomeNoAuth = () => {
  const { isAuthenticated } = useAuth0()

  return (
    !isAuthenticated && (
      <>

        <form>
          <input className="goalInput-NoAuth" type="text" placeholder="Sign in or register to start adding goals..." disabled></input>
        </form>

        <div className="goals-card">

          {/* To display goals */}
          <div>
            <div className="goals-img"></div>
          </div>

          <div>
            <button className="goals-button-noauth">
                    View All Goals
            </button>
          </div>
        </div>

        <div className="spacing-div"></div>


      </>
    )
  )
}

export default HomeNoAuth
