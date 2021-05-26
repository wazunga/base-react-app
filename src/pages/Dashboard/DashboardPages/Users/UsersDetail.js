import React from 'react'
import { UsersForm } from './UsersForm'

export const UserDetail = ({ id, users }) => {
  const userToView = users.find((user) =>
    user.user_id.toString() === id ? user : undefined
  )

  return <UsersForm user={userToView} />
}
