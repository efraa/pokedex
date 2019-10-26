import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Validator from 'simple-react-validator'

import Register from '../../containers/Register'
import { Field } from '../../components/Forms/Field'
import { Button } from '../../components/Forms/Button'

// Utils
import { validations, roles } from '../../utils/config'

// Actions
import { registerUser } from '../../state/actions'

const RegisterPage = ({ meta, isAuth, registerUser }) => {
  const [data, setData] = useState({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    role: meta.role,
    codeSchool: '',
    validator: new Validator(validations),
  })

  const {
    name,
    surname,
    username,
    email,
    password,
    role,
    validator,
    codeSchool,
  } = data
  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    setData({ ...data })
    if (validator.allValid()) {
      const user = {
        name,
        surname,
        username,
        email,
        password,
        codeSchool,
        role,
      }
      await registerUser(user)
    } else validator.showMessages()
  }

  return isAuth ? (
    <Redirect to="/home" />
  ) : (
    <Register title={meta.title} subtitle="Usar otras credenciales de correo.">
      <form className="form row" onSubmit={e => onSubmit(e)}>
        <Field
          placeholder={
            role === roles.school ? 'Nombre de institución' : 'Nombre'
          }
          value={name}
          name="name"
          onChange={e => onChange(e)}
          wrapper={role !== roles.school ? 'col-lg-6' : ''}
        >
          {validator.message('name', name, 'required|alpha_space')}
        </Field>

        {role !== roles.school ? (
          <Field
            placeholder="Apellidos"
            value={surname}
            name="surname"
            onChange={e => onChange(e)}
            wrapper="col-lg-6"
          >
            {validator.message('surname', surname, 'required|alpha_space')}
          </Field>
        ) : null}

        <Field
          placeholder="Correo electrónico "
          value={email}
          name="email"
          onChange={e => onChange(e)}
        >
          {validator.message('email', email, 'required|email')}
        </Field>

        <Field
          placeholder="Nombre de usuario"
          value={username}
          name="username"
          onChange={e => onChange(e)}
          wrapper="col-lg-6"
        >
          {validator.message('username', username, 'required|alpha_num_dash')}
        </Field>

        {role !== roles.school ? (
          <Field
            placeholder="Código de institución"
            value={codeSchool}
            name="codeSchool"
            onChange={e => onChange(e)}
            wrapper="col-lg-6"
          >
            {validator.message('codeSchool', codeSchool, 'required|alpha_num')}
          </Field>
        ) : null}

        <Field
          type="password"
          placeholder="Contraseña"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          wrapper={role === roles.school ? 'col-lg-6' : ''}
        >
          {validator.message('password', password, 'required|min:6')}
        </Field>

        <div className="col-12">
          <p className="register__content">
            Al registrarse, usted acepta los{' '}
            <Link to="/register-school">Términos de servicio</Link> & nuestra{' '}
            <Link to="/register-school">Política de privacidad.</Link>
          </p>
        </div>
        <Button
          label="Registrarse"
          type="submit"
          classes="form__field d-flex justify-content-end"
        />
      </form>
    </Register>
  )
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
})

export default connect(
  mapStateToProps,
  { registerUser }
)(RegisterPage)
