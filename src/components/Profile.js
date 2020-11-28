import React from 'react'
import ProfileData from './ProfileData'

const Profile = ({name}) => {
    return (
        <div>
            <ProfileData/>
            {name}
        </div>
    )
}

export default Profile
