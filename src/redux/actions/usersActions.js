import { client } from '../../api'
import { USER_ACTIONS } from './types'

/*const USER = {
	user_created_at: '2021-05-22T23:01:01.000Z',
	user_id: 2,
	user_username: 'Ser2',
	user_name: 'Sergio',
	user_password: '$2b$10$EEWVrE7s0jGWK5s2JzfWceWBrvw7H/W0A5dBG6vwI7Rcq47nnlb7S',
	user_role: 1,
	user_status: 1,
	user_updated_at: '2021-05-22T23:01:01.000Z'
}*/

export const fetchUsers = (users) => ({
  type: USER_ACTIONS.FETCH_USERS,
  payload: users
})

export const thunkFecthUsers = async (dispatch, _) => {
  const users = await client.get({ resource: 'users' })
  await dispatch({ type: USER_ACTIONS.FETCH_USERS, payload: users })
}

export const setToken = (token) => ({
  type: USER_ACTIONS.SET_TOKEN,
  payload: token
})

export const saveUser = async (dispatch, getState) => {
  let state = getState()
  const userData = state.users.current
  const newUser = await client.post({
    resource: 'users/signin',
    body: userData
  })
  console.log('before', state.users.data)
  dispatch({ type: USER_ACTIONS.SAVE_USER, payload: newUser })
  state = getState()
  console.log('after', state.users.data)
}

export const updateUser = async (dispatch, getState) => {
  const state = getState()
  const userData = state.users.current
  const updatedUser = await client.put({ body: userData, resource: 'users' })
  console.log('updated', updatedUser)
  dispatch({
    type: USER_ACTIONS.UPDATE_USER,
    payload: updatedUser,
    id: updatedUser.user_id
  })
}

export const deleteUser = async (dispatch, getState) => {
  let state = getState()
  const userData = state.users.current
  const deletedUser = await client.delete({ body: userData, resource: 'users' })
  console.log('before', state.users.data)
  dispatch({
    type: USER_ACTIONS.DELETE_USER,
    payload: deletedUser,
    id: userData.user_id
  })
  state = getState()
  console.log('after', state.users.data)
}

export const setCurrentUser = (user) => ({
  type: USER_ACTIONS.SET_CURRENT_USER,
  payload: user
})
