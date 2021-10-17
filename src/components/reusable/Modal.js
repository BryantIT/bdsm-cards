import React from 'react'
import UserForm from '../userForm/UserForm'
import {
  Section,
  ModalWrapper
} from './ModalStyle'

const Modal = ({ origin, showModal, clearModal }) => {
  return (
    showModal ?
	<Section>
      <ModalWrapper>
              <UserForm origin={origin} clearModal={clearModal}/> : null
      </ModalWrapper>
	</Section> : null
  )
}

export default Modal
