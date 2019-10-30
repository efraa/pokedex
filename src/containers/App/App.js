import React, { useEffect, memo } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import jwt from 'jwt-decode'

import Routes from '../../routes'

import { Notification } from '../../components/Notification'
import { OnBoarding } from '../../components/onBoarding'

// Actions
import { setUser } from '../../store/actions/auth'
import { LOADED, LOGOUT } from '../../store/types'

// Redux
import store from '../../store'

const App = memo(() => {
  useEffect(() => {
    try {
      const token = localStorage.token
      // Check for token and set
      if (token) {
        // Decode token and get user info and exp
        const user = jwt(token)
        // Set user
        store.dispatch(setUser(user))
      } else store.dispatch({ type: LOADED })
    } catch (err) {
      store.dispatch({ type: LOGOUT })
    }
  }, [])

  return (
    <Provider store={store}>
      <OnBoarding />
      <Notification />
      <Router>
        <>
          <Switch>
            <Route component={Routes} />
          </Switch>
        </>
      </Router>
    </Provider>
  )
})

export default App
