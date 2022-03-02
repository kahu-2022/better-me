import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

import Footer from './Footer'

const HomeNoAuth = () => {
  const { isAuthenticated } = useAuth0()

  return (
    !isAuthenticated && (
      <>

        <form>
          <input className="goalInput-NoAuth" type="text" placeholder="Sign in or register to start adding goals..." disabled></input>
        </form>

        <div className="goals-card">
          <div>
            <button className="goals-button-noauth">
              View All Goals
            </button>
          </div>
        </div>

        <div className="spacing-div"></div>

        <Footer />
      </>
    )
  )
}

export default HomeNoAuth
