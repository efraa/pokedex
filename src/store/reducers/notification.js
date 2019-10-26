import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../types'

const initialState = []

export const notification = (state = initialState, action) => {
  const { type, payload, id } = action

  switch (type) {
    case SET_NOTIFICATION:
      return [...state, payload]
    case REMOVE_NOTIFICATION:
      return state.filter(notification => notification.id !== id)
    default:
      return state
  }
}
