import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Routes
import { Home } from '../pages/Home'

export const Routes = () => (
  <>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Home} />
    </Switch>
  </>
)
