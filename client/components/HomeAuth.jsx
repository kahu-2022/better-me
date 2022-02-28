import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

function HomeAuth () {
  const { isAuthenticated } = useAuth0()

  return (
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
