import React, { useState } from 'react'
import { connect } from 'react-redux'
import Validator from 'simple-react-validator'
import { Link } from 'react-router-dom'

import { Authentication } from '../../containers/Authentication'
import { Container } from '../../containers/Container'
import { Field } from '../../components/Forms/Field'
import { Button } from '../../components/Forms/Button'
import { Subtitle } from '../../components/Subtitle'
import PokedexImage from '../../assets/images/pokedex.svg'

// Utils
import { validations } from '../../utils/config'

// Actions
import { login } from '../../store/actions'

const LoginPage = ({ login }) => {
  const [data, setData] = useState({
    emailOrUsername: '',
    password: '',
    validator: new Validator(validations),
  })

  const {
    emailOrUsername,
    password,
    validator,
  } = data

  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })
  const onSubmit = async e => {
    e.preventDefault()
    setData({ ...data })
    if (validator.allValid()) {
      const user = {
        emailOrUsername,
        password,
      }
      await login(user)
    } else validator.showMessages()
  }

  return (
    <Authentication>
      <form onSubmit={e => onSubmit(e)}>
        <Container>
          <div className="col-12 col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
            <img src={PokedexImage} alt="Pokemon" />
          </div>
          <div className="col-12 col-lg-6">
            <Container>
              <div className="col-12 mb-4">
                <Subtitle text="Access with your account." />
              </div>

              <Field
                placeholder="Email or username"
                value={emailOrUsername}
                name="emailOrUsername"
                onChange={e => onChange(e)}
              >
                {emailOrUsername.includes('@')
                  ? validator.message('emailOrUsername', emailOrUsername, 'required|email')
                  : validator.message('emailOrUsername', emailOrUsername, 'required|alpha_num_dash')}
              </Field>

              <Field
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
              >
                {validator.message('password', password, 'required|min:6')}
              </Field>

              <div className="col-12 mt-3">
                <p>
                  You don't have an account yet? Sign up!
                  <Link to="/register"> Create Account.</Link>
                </p>
              </div>
              <div className="col-12 d-flex justify-content-between align-items-center mt-4">
                <Link className="mr-3" to="/forgot-password"> <b>Forgot password?</b> </Link>
                <Button
                  text="Access"
                  type="submit"
                />
              </div>
            </Container>
          </div>
        </Container>
      </form>
    </Authentication>
  )
}

export default connect(null, { login })(LoginPage)
