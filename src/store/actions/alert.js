import { SET_ALERT, REMOVE_ALERT } from '../types'

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = new Date().getTime()
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  })

  setTimeout(() => dispatch({ type: REMOVE_ALERT, id }), timeout)
}
