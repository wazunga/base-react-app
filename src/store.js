import { createStore, applyMiddleware } from 'redux'
import { usersReducer } from './reducers/usersReducer'
import thunkMiddleware from 'redux-thunk'

const composedEnhancer = applyMiddleware(thunkMiddleware)

export const configureStore = () => createStore(usersReducer, composedEnhancer)
