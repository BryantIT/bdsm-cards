import React, { Fragment, useState } from 'react'
import MenuOptions from './MenuOptions'
import {
  GroupContainer,
  ButtonWrapper
} from './QuickMenuStyles'

const QuickMenu = ({ currentUser, signupCallback }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleMenuClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <Fragment>
      {
        isClicked ?
        <GroupContainer>
          <MenuOptions currentUser={currentUser} signupCallback={signupCallback}/>
        </GroupContainer> : null
      }
      <GroupContainer>
        <ButtonWrapper clicked={isClicked}>
          <button onClick={handleMenuClick}>{currentUser ? 'Quick Menu' : 'Start'}</button>
        </ButtonWrapper>
      </GroupContainer>
    </Fragment>
  )
}

export default QuickMenu
