import { combineReducers } from 'redux'

import auth from './auth'
import { notification } from './notification'

const appReducer = combineReducers({
  auth,
  notification,
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') state = undefined

  return appReducer(state, action)
}

export default rootReducer
