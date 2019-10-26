import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Routes
import Auth from '../pages/Auth'
import Home from '../pages/Home'

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Home} />
    </Switch>
  </>
)

export default Routes
