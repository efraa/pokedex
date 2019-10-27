import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({
  isAuth, 
  redirect, 
  ...props 
}) => isAuth ? <Route exact {...props} /> : <Redirect to={redirect || "/auth"} />
