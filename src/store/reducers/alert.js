import { SET_ALERT, REMOVE_ALERT } from '../types'

const initialState = []

export default (state = initialState, action) => {
  const { type, payload, id } = action

  switch (type) {
    case SET_ALERT:
      return [...state, payload]
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== id)
    default:
      return state
  }
}
