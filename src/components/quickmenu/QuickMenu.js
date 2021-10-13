import React, { Fragment, useState } from 'react'
import {
  GroupContainer,
  ButtonWrapper
 } from './Styles'

const QuickMenu = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleMenuClick = () => {
    setIsClicked(!isClicked)
  }
  console.log(isClicked)
  return (
    <Fragment>
      <GroupContainer>
        <ButtonWrapper clicked={isClicked}>
          <button onClick={handleMenuClick}>Quick Menu</button>
        </ButtonWrapper>
      </GroupContainer>
    </Fragment>
  )
}

export default QuickMenu
