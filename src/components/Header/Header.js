import React, { memo } from 'react'
import UserCard from './HeaderCard'

export const Header = memo(() => (
  <div className="header">
    <div className="header__container">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <h1 className="header__brand">Pokedex.</h1>
          </div>

          <UserCard />
        </div>
      </div>
    </div>
  </div>
))
