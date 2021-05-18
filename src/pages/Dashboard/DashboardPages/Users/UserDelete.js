import { useNavigate } from '@reach/router'
import React from 'react'
import { Modal } from '../../../../components/Modal'
import { USERS_DATA } from '../../../../data/store'

export const UserDelete = ({ id }) => {
  const navigate = useNavigate()

  const handleNavigate = async (event) => {
    event.preventDefault()
    navigate('../')
  }

  const userToDelete = USERS_DATA.find((user) =>
    user.user_id.toString() === id ? user : undefined
  )

  return (
    <Modal
      content={`Esta seguro de desea eliminar el usuario: ${userToDelete.user_name}`}
      isOpen={true}
      title="Eliminar Usuario"
      onAction={handleNavigate}
      onClose={handleNavigate}
      type="delete"
    />
  )
}
