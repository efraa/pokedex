import { verifyTokenAndGetUser } from '../../utils/jwt'
import { AuthService } from '../../services'

import { Notification } from '../actions'

import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SET_CURRENT_USER,
  LOGOUT,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_LOADING,
  RESET_PASSWORD_GET_USER_SUCCESS,
  RESET_PASSWORD_GET_USER_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  ON_BOARDING_FAILT,
  ON_BOARDING_SUCCESS,
} from '../types'

// Set New Notifications
const notification = (response, type, dispatch) => {
  const { data: body, status } = response
  const { data } = body
  if (data && data.length) data.forEach(notification => dispatch(Notification(notification.msg, status)))
  else if (data) dispatch(Notification(data.msg, status))
  else if (body.msg) dispatch(Notification(body.msg, 200))

  dispatch({ type })
}

// Signup
export const signup = user => async dispatch => {
  try {
    const res = await AuthService.signup(user)
    if (res.data.data) dispatch(authUser(res.data.data, REGISTER_SUCCESS))
  } catch (err) {
    notification(err.response, REGISTER_FAIL, dispatch)
  }
}

// Auth - Get User Token
export const login = user => async dispatch => {
  try {
    const res = await AuthService.auth(user)
    if (res.data.data) dispatch(authUser(res.data.data))
  } catch (err) {
    notification(err.response, LOGIN_FAIL, dispatch)
  }
}

// Forgot Password
export const forgotPassword = (email, history) => async dispatch => {
  try {
    dispatch({ type: FORGOT_PASSWORD_LOADING })
    
    const res = await AuthService.forgotPassword(email)
    if (res.data.data) 
      notification(res.data, FORGOT_PASSWORD_SUCCESS, dispatch)

    history.push('/forgot-password/check-your-email')
  } catch (err) {
    notification(err.response, FORGOT_PASSWORD_FAIL, dispatch)
  }
}

// Forgot Password - Expire
export const forgotPassIsExpire = (token, history) => async dispatch => {
  try {
    const res = await AuthService.forgotPassIsExpire(token)
    if (res.data.data) {
      const { name, lastname, username, picture } = res.data.data
      dispatch({ 
        type: RESET_PASSWORD_GET_USER_SUCCESS,
        user: {
          name,
          lastname,
          username,
          picture,
        }
      })
    }
  } catch (err) {
    notification(err.response, RESET_PASSWORD_GET_USER_FAIL, dispatch)
    history.push('/forgot-password')
  }
}

// Reset Password
export const resetPassword = (password, token, history) => async dispatch => {
  try {
    const res = await AuthService.resetPassword(password, token)
    if (res.data.data) notification(res.data, RESET_PASSWORD_SUCCESS, dispatch)

    history.push('/auth')
  } catch (err) {
    notification(err.response, RESET_PASSWORD_FAIL, dispatch)
  }
}

// Set OnBoarding
export const setOnBoarding = (username, onBoarding) => async dispatch => {
  try {
    const res = await AuthService.updateUser(username, onBoarding)
    if (res.data.data)
      dispatch({
        type: ON_BOARDING_SUCCESS,
      })
  } catch (err) {
    notification(err.response, ON_BOARDING_FAILT, dispatch)
  }
}

// set User
export const authUser = (token, type = LOGIN_SUCCESS) => 
  async dispatch => {
  dispatch({
    type,
    token,
  })
  // Decode token and get user info and exp
  const user = await verifyTokenAndGetUser(token)
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
  dispatch({ type: LOGOUT })
}