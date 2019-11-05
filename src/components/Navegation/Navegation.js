import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { Button } from '../Forms/Button'

// Actions
import { setOnBoarding } from '../../store/actions'

const Navegation = ({ user, setOnBoarding }) => {
  const onSubmit = async e => {
    e.preventDefault()
    console.log(e)
    /* await setOnBoarding(user.username, {
      onBoarding: false,
    }) */
  }

  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <nav className="nav">
          {user && (
            <div className="nav__user">
            <div
              styles={`background-image: url('${user.picture}');`}
              className="nav__user__picture"   
            />
            <div className="nav__user__content">
              <h4 className="nav__user__name">
                {user.name}
                {' '}
                {user.lastname}
              </h4>
              <p className="nav__user__username">
                @{user.username}
              </p>
            </div>
          </div>
          )}
          
          <li>
            <NavLink 
              to="/home"
              className="nav__item"
              activeClassName="nav__item--active"
            >
              Home
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/pokedex"
              className="nav__item"
              activeClassName="nav__item--active"
            >
              Pokedex
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/profile"
              className="nav__item"
              activeClassName="nav__item--active"
            >
              My Account
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/edit"
              className="nav__item"
              activeClassName="nav__item--active"
            >
              Edit Account
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/logout"
              className="nav__item"
              activeClassName="nav__item--active"
            >
              Log out
            </NavLink>
          </li>

          <Button
            text="Add new"
            classes="nav__button"
            onClick={e => onSubmit(e)}
          />
        </nav>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, { setOnBoarding })(Navegation)
