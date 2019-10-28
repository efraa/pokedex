import jwt from 'jwt-decode'
import { AuthService } from '../../services'

import { Notification } from '../actions'

import {
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SET_CURRENT_USER,
  LOGOUT,
} from '../types'

// Set New Notifications
const notification = (response, type, dispatch) => {
  const { data: body, status } = response
  const { data } = body
  if (data && data.length)
    data.forEach(alert => dispatch(Notification(alert.msg, status)))
  else if (data) dispatch(Notification(data.msg, status))
  dispatch({ type })
}

// Register User
export const registerUser = user => async dispatch => {
  try {
    const res = await AuthService.register(user)
    if (res.data.data) dispatch(authUser(res.data.data, REGISTER_SUCCESS))
  } catch (err) {
    notification(err.response, REGISTER_FAIL, dispatch)
  }
}

// set User
export const authUser = (token, type = LOGIN_SUCCESS) => dispatch => {
  dispatch({
    type,
    token,
  })
  // Decode token and get user info and exp
  const user = jwt(token)
  // Set user
  dispatch(setUser(user))
}

// set User
export const setUser = user => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    user,
  })
}


// Logout
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};