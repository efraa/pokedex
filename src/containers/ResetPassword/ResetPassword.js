import React, { memo } from 'react'

import { Container } from '../Container'
import PokedexImage from '../../assets/images/pokedex.svg'

export const ResetPassword = memo(({ children }) => (
  <div className="auth__page fade">
    <Container rowClasses="auth__row">
      <div className="col-12">
        <div className="auth__container">
          <div className="auth__content">
            <Container>
              <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
                <img src={PokedexImage} alt="Pokemon" />
              </div>
              <div className="col-12 col-lg-6 d-lg-flex justify-content-center align-items-center">
                {children}
              </div>
            </Container>
          </div>
        </div>
      </div>
    </Container>
  </div>
))
