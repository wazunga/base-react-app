export const usersReducer = (
  state = { token: undefined, users: [] },
  action
) => {
  switch (action.type) {
    case 'setToken':
      return {
        ...state,
        token: action.payload
      }
    case 'fetchUsers':
      return { ...state, users: action.payload }
    default:
      return state
  }
}
