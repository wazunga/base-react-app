import React from 'react'
import { Form } from '../../../../components/Form'
import { UserSchema } from '../../../../schema'
import { setCurrentUser } from '../../../../redux/actions/usersActions'

export const UsersForm = ({ user, toDispatch }) => (
	<Form 
		initialValues={user} 
		schema={UserSchema} 
		toDispatch={toDispatch}
		setCurrent={setCurrentUser}
	/>
)
