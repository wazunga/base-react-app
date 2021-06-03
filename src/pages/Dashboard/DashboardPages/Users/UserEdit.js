import React from 'react'
import { UserSchema } from '../../../../schema'
import { UsersForm } from './UsersForm'

export const UserEdit = ({ id, users, ...props }) => {
  console.log('id', id)
  const userToEdit = id
    ? users.find((user) => (user.user_id.toString() === id ? user : undefined))
    : UserSchema.initialValues

  return <UsersForm user={userToEdit} {...props} />
}
