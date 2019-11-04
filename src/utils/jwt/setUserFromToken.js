import { verifyTokenAndGetUser } from '.'

// Actions
import { setUser } from '../../store/actions/auth'
import { LOADED, LOGOUT } from '../../store/types'

// Redux
import store from '../../store'

export const setUserFromToken = async () => {
  try {
    // Check for token and set
    const token = localStorage.token
    if (token) {
      // Decode token and get user info and exp
      const user = await verifyTokenAndGetUser(token)
      if (user) store.dispatch(setUser(user))
    } else store.dispatch({ type: LOADED })
  } catch (err) {
    store.dispatch({ type: LOGOUT })
  }
}