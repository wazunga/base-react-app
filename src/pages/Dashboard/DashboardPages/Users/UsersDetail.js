import React from 'react'
import { USERS_DATA } from '../../../../data/store'
import { UsersForm } from './UsersForm'

export const UserDetail = ({ id }) => {
  const userToView = USERS_DATA.find((user) =>
    user.user_id.toString() === id ? user : undefined
  )

  return <UsersForm user={userToView} />
}
