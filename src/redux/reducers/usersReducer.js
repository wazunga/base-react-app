import { USER_ACTIONS } from '../actions/types'
const INITIAL_STATE = { token: '', data: [], current: {} }

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    case USER_ACTIONS.FETCH_USERS:
      return { ...state, data: action.payload }
    case USER_ACTIONS.SAVE_USER:
      const newUsersData = [...state.data, action.payload]
      console.log(newUsersData)
      return { ...state, data: [...state.data, action.payload] }
    case USER_ACTIONS.SET_CURRENT_USER:
      console.log(action.payload)
      return { ...state, current: action.payload }
    case USER_ACTIONS.UPDATE_USER:
      console.log(action.payload)
      return {
        ...state,
        data: state.data.map((user) =>
          user.user_id === action.payload.user_id ? action.payload : user
        )
      }
		case USER_ACTIONS.DELETE_USER:
			console.log(action.payload)
			return {
				...state,
				data: state.data.map((user) => (
					user.user_id === action.payload.user_id ? {...user, user_status: 2 } : user
				))
			}
    default:
      return { ...state }
  }
}
