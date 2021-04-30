import React from 'react'
import PropTypes from 'prop-types'
import { ModalContainer } from './ModalContainer'
import { ModalInfo } from './ModalInfo'
import { ModalIcon } from './ModalIcon'
import { ModalDetail } from './ModalDetail'
import { ModalButtons } from './ModalButtons'
import { ModalAction } from './ModalAction'
import { ModalCancel } from './ModalCancel'

export const Modal = (props) => {
  return (
    <ModalContainer static open={props.isOpen}>
      <ModalInfo>
        <ModalIcon {...props} />
        <ModalDetail {...props} />
      </ModalInfo>
      <ModalButtons>
        <ModalAction {...props}>Aceptar</ModalAction>
        <ModalCancel {...props} />
      </ModalButtons>
    </ModalContainer>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  type: PropTypes.oneOf('confirm', 'delete')
}
