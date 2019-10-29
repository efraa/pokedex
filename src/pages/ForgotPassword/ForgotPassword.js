import React, { useState } from 'react'
import { connect } from 'react-redux'
import Validator from 'simple-react-validator'

import { Spinner } from '../../components/Spinner'
import { ResetPassword } from '../../containers/ResetPassword'
import { Container } from '../../containers/Container'
import { Field } from '../../components/Forms/Field'
import { Button } from '../../components/Forms/Button'
import { Subtitle } from '../../components/Subtitle'


// Utils
import { validations } from '../../utils/config'

// Actions
import { forgotPassword } from '../../store/actions'
import { Link } from 'react-router-dom'

const ForgotPasswordPage = ({
  forgotPassword,
  forgotPassIsLoading,
  history 
}) => {
  const [data, setData] = useState({
    email: '',
    validator: new Validator(validations),
  })

  const {
    email,
    validator,
  } = data

  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })
  const onSubmit = async e => {
    e.preventDefault()
    setData({ ...data })
    if (validator.allValid())
      await forgotPassword({ email }, history)
    else validator.showMessages()
  }

  return (
    <ResetPassword>
      {forgotPassIsLoading ? <Spinner /> : ''}
      <form onSubmit={e => onSubmit(e)}>
        <Container rowClasses="no-gutters">
          <div className="col-12 mb-4">
            <Subtitle text="Find your Pokedex Account." />
          </div>
          <Field
            placeholder="Enter your email"
            value={email}
            name="email"
            type="email"
            onChange={e => onChange(e)}
          >
            {validator.message('email', email, 'required|email')}
          </Field>

          <div className="col-12 mt-3">
            <Link to="/forgot-password"><b> I don't have access to any of these. </b></Link>
          </div>

          <div className="col-12 d-flex justify-content-end mt-5">
            <Link className="button button--secoundary mr-3" to="/auth">
              Cancel
            </Link>
            <Button
              text="Find account"
              type="submit"
            />
          </div>
        </Container>
      </form>
    </ResetPassword>
  )
}

const mapStateToProps = state => ({
  forgotPassIsLoading: state.auth.forgotPassIsLoading,
})

export default connect(mapStateToProps, { forgotPassword })(ForgotPasswordPage)
