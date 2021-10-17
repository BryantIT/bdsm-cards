import React from 'react'
import { useAuth } from '../../auth/UserAuth'

const Profile = () => {
  const { currentUser, userInfo } = useAuth()
  console.log('currentUser', userInfo)
  return (
    <h1>Hello Profile</h1>
  )
}

export default Profile
