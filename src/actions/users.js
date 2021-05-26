import { client } from '../api'

const usersClientConf = { resource: 'users' }

export const fetchUsers = (users) => ({
  type: 'fetchUsers',
  payload: users
})

export const setToken = (token) => ({
  type: 'setToken',
  payload: token
})

export const saveUser = async (dispatch, getState) => {
	const users = client.post({...usersClientConf})
}

export const currentUser = (user) => ({
	type: 'currentUser',
	payload: user
})
