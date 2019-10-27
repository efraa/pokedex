import {
  LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_CURRENT_USER,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from '../types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuth: null,
  loading: true,
  state: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.token)
      return {
        ...state,
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        state: action.msg,
        user: action.user.user,
        isAuth: true,
        loading: false,
      }
    case LOADED:
      return {
        ...state,
        loading: false,
      }
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuth: false,
        user: null,
        loading: false,
      }
    default:
      return {
        ...state,
        state: action.msg,
      }
  }
}
