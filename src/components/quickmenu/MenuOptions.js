import React, { Fragment } from 'react'
import {
  MainGroupContainer,
  ButtonWrapper
} from './QuickMenuStyles'


const MenuOptions = ({ currentUser, signupCallback }) => {
  const initiateSignup = () => {
    signupCallback('sign-up', true)
  }
  const initiateLogin = () => {
    signupCallback('log-in', true)
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
