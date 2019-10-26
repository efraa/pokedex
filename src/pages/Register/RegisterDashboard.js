import React, { memo } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const RegisterDashboardPage = memo(({ isAuth }) =>
  isAuth ? <Redirect to="/home" /> : <h1>Register</h1>
)

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
})

export default connect(
  mapStateToProps,
  {}
)(RegisterDashboardPage)
