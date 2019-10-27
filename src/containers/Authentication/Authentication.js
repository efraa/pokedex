import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from '../Container'

export const Authentication = memo(({ children }) => (
  <div className="auth__page fade">
    <Container rowClasses="auth__row">
      <div className="col-12 col-md-9">
        <div className="auth__container">
          <div className="auth__header">
            <NavLink 
              to="/auth"
              className="auth__button"
              activeClassName="auth__button--is-active"
            >
              Log in
            </NavLink>

            <NavLink 
              to="/register"
              className="auth__button"
              activeClassName="auth__button--is-active"
            >
              Register
            </NavLink>
          </div>
          <div className="auth__content">
            {children}
          </div>
        </div>
      </div>
    </Container>
  </div>
))
