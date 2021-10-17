import React, { Fragment } from 'react'
import {
  MainGroupContainer,
  ButtonWrapper
} from './QuickMenuStyles'


const MenuOptions = ({ loggedIn, signupCallback }) => {
  const initiateSignup = () => {
    signupCallback('signup', true)
  }
  return (
    <Fragment>
      <MainGroupContainer>
        {
          loggedIn ?
          <ButtonWrapper >
              <button>Create Card</button>
              <button>View Cards</button>
              <button>Profile</button>
          </ButtonWrapper> :
          <ButtonWrapper >
              <button onClick={initiateSignup}>Signup</button>
              <button>Login</button>
          </ButtonWrapper>
        }
      </MainGroupContainer>
    </Fragment>
  )
}

export default MenuOptions
