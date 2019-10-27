import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { Link, Redirect } from 'react-router-dom'
import Validator from 'simple-react-validator'

import { Authentication } from '../../containers/Authentication'
import { Container } from '../../containers/Container'
import { Field } from '../../components/Forms/Field'
import { Button } from '../../components/Forms/Button'
import { PokeSelect } from '../../components/Forms/Select'
import { Datepicker } from '../../components/Forms/Datepicker'
import { Subtitle } from '../../components/Subtitle'
import PokeImage from '../../assets/images/pokemon.png'

// Utils
import { validations } from '../../utils/config'
import { genders } from '../../utils/genders'

// Actions
import { registerUser } from '../../store/actions'

const RegisterPage = ({ registerUser }) => {
  const [data, setData] = useState({
    name: '',
    lastname: '',
    birthdate: null,
    username: '',
    email: '',
    password: '',
    city: '',
    gender: '',
    validator: new Validator(validations),
  })

  const {
    name,
    lastname,
    birthdate,
    username,
    email,
    password,
    city,
    gender,
    validator,
  } = data
  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })
  const onSelect = e => setData({ ...data, [e.name]: e.value }) 

  const onSubmit = async e => {
    e.preventDefault()
    setData({ ...data })
    if (validator.allValid()) {
      const user = {
        name,
        lastname,
        birthdate,
        username,
        email,
        password,
        city,
        gender,
      }
      await registerUser(user)
    } else validator.showMessages()
  }

  return (
    <Authentication>
      <form onSubmit={e => onSubmit(e)}>
        <Container>
          <div className="col-12 col-lg-6">
            <Subtitle text="Create a new Account." />
          </div>

          <div className="col-md-6 d-none d-lg-block">
            <div className="register__brand">
              <img src={PokeImage} alt="Pokemon" />
            </div>
          </div>

          <div className="col-12">
            <div className="register__gap" />
          </div>

          <Field
            placeholder="Name"
            value={name}
            name="name"
            onChange={e => onChange(e)}
            wrapper="col-lg-6"
          >
            {validator.message('name', name, 'required|alpha_space')}
          </Field>

          <Field
            placeholder="Lastname"
            value={lastname}
            name="lastname"
            onChange={e => onChange(e)}
            wrapper="col-lg-6"
          >
            {validator.message('lastname', lastname, 'required|alpha_space')}
          </Field>

          <Field
            placeholder="Username"
            value={username}
            name="username"
            onChange={e => onChange(e)}
            wrapper="col-lg-6"
          >
            {validator.message('username', username, 'required|alpha_num_dash')}
          </Field>

          <Field
            placeholder="Email"
            value={email}
            name="email"
            type="email"
            onChange={e => onChange(e)}
            wrapper="col-lg-6"
          >
            {validator.message('email', email, 'required|email')}
          </Field>

          <PokeSelect
            placeholder="Select Gender"
            wrapper="col-lg-6"
            name="gender"
            value={gender}
            onChange={(e, d) => onSelect(d)}
            options={genders}
          >
            {validator.message('gender', gender, 'required')}
          </PokeSelect>

          <Datepicker 
            onChange={birthdate => setData({ ...data, birthdate })}
            placeholder="Select your birthday"
            wrapper="col-lg-6"
          >
            {validator.message('birthdate', birthdate, 'required')}
          </Datepicker>

          <Field
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            wrapper="col-lg-6"
          >
            {validator.message('password', password, 'required|min:6')}
          </Field>

          <Field
            placeholder="City"
            value={city}
            name="city"
            onChange={e => onChange(e)}
            wrapper="col-lg-6"
          >
            {validator.message('city', city, 'required|alpha_space')}
          </Field>

          <div className="col-6 mt-3">
            <p>
              If you register, you accept the
              <b> Terms of Service </b> and our
              <b> Privacy Policy </b>.
            </p>
          </div>
          <div className="col-12 d-flex justify-content-end mt-4">
            <Button
              text="Registrarse"
              type="submit"
            />
          </div>
        </Container>
      </form>
    </Authentication>
  )
}

export default connect(null, { registerUser })(RegisterPage)
