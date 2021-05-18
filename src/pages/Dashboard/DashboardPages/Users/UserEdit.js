import React from 'react'
import { USERS_DATA } from '../../../../data/store'
import { UsersForm } from './UsersForm'

export const UserEdit = ({ id }) => {
  const userToEdit = USERS_DATA.find((user) =>
    user.user_id.toString() === id ? user : undefined
  )

  return <UsersForm user={userToEdit} />
}
