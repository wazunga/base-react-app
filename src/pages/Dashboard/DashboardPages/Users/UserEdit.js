import React from 'react'
import { UsersForm } from './UsersForm'

export const UserEdit = ({ id, users }) => {
  const userToEdit = users.find((user) =>
    user.user_id.toString() === id ? user : undefined
  )

  return <UsersForm user={userToEdit} />
}
