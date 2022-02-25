import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    
    const { isAuthenticated } = useAuth0()

    return (
        isAuthenticated && (
        <>
            <h1></h1>
        </>
    )
    )
}

export default Profile
