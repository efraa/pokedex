import React, { memo } from 'react'

import { Title } from '../../components/Title'
import { Back } from '../../components/Back'

const Register = memo(({ children, title, subtitle }) => (
  <div className="auth__page">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Back to="/register" />
        </div>
        <div className="col-12 col-lg-6">
          <Title>{title}</Title>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form__container">
            <div className="row no-gutters">
              <div className="col-12">
                {/* Google button */}
                <hr />
                <p className="form__subtitle">{subtitle}</p>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
))

export default Register
