import { combineReducers } from 'redux'

import auth from './auth'
import alert from './alert'

const appReducer = combineReducers({
  auth,
  alert,
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') state = undefined

  return appReducer(state, action)
}

export default rootReducer
