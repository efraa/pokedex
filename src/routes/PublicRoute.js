import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({
  isAuth, 
  redirect, 
  ...props 
}) => isAuth ? <Redirect to={redirect} /> : <Route exact {...props} />
