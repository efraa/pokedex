import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../types'

export const Notification = (msg, notificationType, timeout = 5000) => dispatch => {
  const id = new Date().getTime()
  dispatch({
    type: SET_NOTIFICATION,
    payload: { msg, notificationType, id },
  })

  setTimeout(() => dispatch({ type: REMOVE_NOTIFICATION, id }), timeout)
}
