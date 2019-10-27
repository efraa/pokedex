import React from 'react'
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

// Routes
import { Home } from '../pages/Home'
import { Register } from '../pages/Register'

const Routes = ({
  isAuth
}) => (
  <>
    <Switch>
      <PrivateRoute
        isAuth={isAuth}
        path="/home" 
        component={Home} 
      />

      <PublicRoute 
        isAuthenticated={isAuth}
        path="/register"
        component={Register} 
        redirect="/home"
      />

      <PrivateRoute
        isAuth={isAuth}
        path="/" 
        component={Home} 
      />
    </Switch>
  </>
)

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {})(Routes)
