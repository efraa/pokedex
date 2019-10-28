import React from 'react'
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

// Routes
import { Home } from '../pages/Home'
import { Signup } from '../pages/Signup'
import { Logout } from '../pages/Logout'
import { Login } from '../pages/Login'
import { ForgotPassword } from '../pages/ForgotPassword'

const Routes = ({
  isAuth,
  loading
}) => !loading && (
  <>
    <Switch>
      <PrivateRoute
        isAuth={isAuth}
        path="/home" 
        component={Home} 
      />

      <PublicRoute 
        isAuth={isAuth}
        path="/signup"
        component={Signup} 
      />

      <PublicRoute 
        isAuth={isAuth}
        path="/auth"
        component={Login} 
      />

      <PublicRoute 
        isAuth={isAuth}
        path="/forgot-password"
        component={ForgotPassword} 
      />

      <PrivateRoute
        isAuth={isAuth}
        path="/logout" 
        component={Logout} 
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
  loading: state.auth.loading,
})

export default connect(mapStateToProps, {})(Routes)
