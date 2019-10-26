import jwt from 'jwt-decode'
import api from 'axios'

import { setAlert } from '../actions'
import { headers, uri } from '../../utils/config'

import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SET_CURRENT_USER,
} from '../types'

// Set New Alerts
const setResponse = (response, type, dispatch) => {
  const { data: body, status } = response
  const { data } = body
  if (data && data.length)
    data.forEach(alert => dispatch(setAlert(alert.msg, status)))
  else if (data) dispatch(setAlert(data.msg, status))
  dispatch({ type })
}

// Register User
export const registerUser = user => async dispatch => {
  try {
    const res = await api.post(uri('register'), user, headers)
    if (res.data.data) dispatch(authUser(res.data.data, REGISTER_SUCCESS))
  } catch (err) {
    setResponse(err.response, REGISTER_FAIL, dispatch)
  }
}

// Auth - Get User Token
export const loginUser = user => async dispatch => {
  try {
    const res = await api.post(uri('auth'), user, headers)
    if (res.data.data) dispatch(authUser(res.data.data))
  } catch (err) {
    setResponse(err.response, LOGIN_FAIL, dispatch)
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
