import React, { useEffect, memo } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from '../../routes'
import { Notification } from '../../components/Notification'

// Set Authentication
import { setUserFromToken } from '../../utils/jwt/setUserFromToken'

// Redux
import store from '../../store'

const App = memo(() => {
  useEffect(() => {
    setUserFromToken()
  }, [])

  return (
    <Provider store={store}>
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
