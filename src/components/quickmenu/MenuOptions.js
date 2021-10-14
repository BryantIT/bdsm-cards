import React, { Fragment } from 'react'
import {
  MainGroupContainer,
  ButtonWrapper
} from './QuickMenuStyles'


const MenuOptions = () => {
  return (
    <Fragment>
      <MainGroupContainer>
        <ButtonWrapper >
          <button >Create Card</button>
          <button >View Cards</button>
          <button >Profile</button>
        </ButtonWrapper>
      </MainGroupContainer>
    </Fragment>
  )
}

export default MenuOptions
