import React from 'react'
import Signup from '../signup/Signup'
import {
  Section,
  ModalWrapper
} from './ModalStyle'

const Modal = ({ origin, showModal, clearModal }) => {
  return (
    showModal ?
	<Section>
      <ModalWrapper onClick={clearModal}>
            {
              origin === 'signup' ?
              <Signup /> : null
            }
      </ModalWrapper>
	</Section> : null
  )
}

export default Modal
