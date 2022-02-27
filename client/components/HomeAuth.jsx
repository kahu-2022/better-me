import React from 'react'
// import Nav from './NavNoAuth'
// import Login from './SignIn'
// import Logout from './SignOut'
import { useAuth0 } from '@auth0/auth0-react' 
// import { Routes, Route } from 'react-router-dom'

// import CompletedGoals from './CompletedGoals'
// import MyGoals from './MyGoals'

import TextField from '@mui/material/TextField'
import { alignProperty } from '@mui/material/styles/cssUtils'
import { textAlign } from '@mui/system'
import { AlignHorizontalCenter } from '@mui/icons-material'

function HomeAuth() {
    // const { isAuthenticated } = useAuth0();

    return(
    // isAuthenticated && (

    <>
        
        {/* <TextField fullWidth placeholder="Enter your goal here..." id="fullWidth" 
        InputLabelProps={{ shrink: true  }} sx={{maxwidth: '100%', boxShadow: 4 }} inputProps={{ style: {textAlign: 'center' }}} /> */}

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

        
            {/* <iframe className="borat" src="https://giphy.com/embed/Od0QRnzwRBYmDU3eEO" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
        
        
        {console.log('Home page with auth')}
        
    </>
    )
    // )
}

export default HomeAuth