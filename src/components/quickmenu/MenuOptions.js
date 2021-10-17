import React, { Fragment } from 'react'
import { useAuth } from '../../auth/UserAuth'
import {
  MainGroupContainer,
  ButtonWrapper
} from './QuickMenuStyles'


const MenuOptions = ({ signupCallback }) => {
  const{ signout, currentUser } = useAuth
  console.log(currentUser)
  const initiateSignup = () => {
    signupCallback('sign-up', true)
  }
  const initiateLogin = () => {
    signupCallback('log-in', true)
  }
  const handleSignout = () => {
    signout()
  }
  return (
    <Fragment>
      <MainGroupContainer>
        {
          currentUser ?
          <ButtonWrapper >
              <button>Create Card</button>
              <button>View Cards</button>
              <button>Profile</button>
            <button onClick={handleSignout}>Log Off</button>
          </ButtonWrapper> :
          <ButtonWrapper >
              <button onClick={initiateSignup}>Signup</button>
            <button onClick={initiateLogin}>Login</button>
          </ButtonWrapper>
        }
      </MainGroupContainer>
    </Fragment>
  )
}

export default MenuOptions
