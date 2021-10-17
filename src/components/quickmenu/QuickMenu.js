import React, { Fragment, useState } from 'react'
import MenuOptions from './MenuOptions'
import {
  GroupContainer,
  ButtonWrapper
} from './QuickMenuStyles'

const QuickMenu = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleMenuClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <Fragment>
      {
        isClicked ?
        <GroupContainer>
          <MenuOptions />
        </GroupContainer> : null
      }
      <GroupContainer>
        <ButtonWrapper clicked={isClicked}>
          <button onClick={handleMenuClick}>Quick Menu</button>
        </ButtonWrapper>
      </GroupContainer>
    </Fragment>
  )
}

export default QuickMenu
