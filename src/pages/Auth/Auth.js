import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Validator from 'simple-react-validator'

import Auth from '../../containers/Auth'
import Field from '../../components/Forms/Field'
import Button from '../../components/Forms/Button'

// Utils
import { validations } from '../../utils/config'

// Actions
import { loginUser } from '../../store/actions'

const AuthPage = ({ isAuth, loginUser }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    validator: new Validator(validations),
  })

  const { email, password, validator } = data
  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    setData({ ...data })
    if (validator.allValid()) {
      const user = {
        email,
        password,
      }
      await loginUser(user)
    } else validator.showMessages()
  }

  return isAuth ? (
    <Redirect to="/home" />
  ) : (
    <Auth
      title="Inicie sesión en su cuenta."
      subtitle="Use su cuenta de email o nombre de usuario."
    >
      <form className="form row" onSubmit={e => onSubmit(e)}>
        <Field
          placeholder="Usuario o Correo electrónico "
          value={email}
          name="email"
          onChange={e => onChange(e)}
        >
          {email.includes('@')
            ? validator.message('email', email, 'required|email')
            : validator.message('email', email, 'required|alpha_num_dash')}
        </Field>

        <Field
          type="password"
          placeholder="Contraseña"
          name="password"
          value={password}
          onChange={e => onChange(e)}
        >
          {validator.message('password', password, 'required|min:6')}
        </Field>
        <div className="col-12">
          <Link to="/auth" className="form__label">
            ¿Olvidaste tu contraseña?
          </Link>
          <p className="form__content">
            ¿Aún no tienes cuenta? Regístrate.
            <Link to="/register">Crear cuenta.</Link>
          </p>
        </div>
        <Button
          label="Acceder"
          type="submit"
          classes="form__field d-flex justify-content-end"
        />
      </form>
    </Auth>
  )
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
})

export default connect(
  mapStateToProps,
  { loginUser }
)(AuthPage)
