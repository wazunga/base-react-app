import React from 'react'
import { Form } from '../../../../components/Form'
import { UserSchema } from '../../../../schema'

export const UsersForm = ({ user }) => (
	<Form initialValues={user} schema={UserSchema} />
)
