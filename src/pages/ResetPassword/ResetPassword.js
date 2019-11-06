import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Validator from 'simple-react-validator'

import { ResetPassword } from '../../containers/ResetPassword'
import { Container } from '../../containers/Container'
import { Field } from '../../components/Forms/Field'
import { Button } from '../../components/Forms/Button'
import { Subtitle } from '../../components/Subtitle'

// Utils
import { validations } from '../../utils/config'

// Actions
import { forgotPassIsExpire, resetPassword } from '../../store/actions'

const ResetPasswordPage = ({
  forgotPassIsExpire,
  resetPassword,
  history,
  match,
  auth,
}) => {
  useEffect(() => {
    forgotPassIsExpire(match.params.token, history)
  }, [forgotPassIsExpire, match, history])

  const [data, setData] = useState({
    password: '',
    newPassword: '',
    validator: new Validator(validations),
  })

  const {
    password,
    newPassword,
    validator,
  } = data

  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    setData({ ...data })

    if (validator.allValid()) {
      if (password === newPassword) {
        await resetPassword({ password }, match.params.token, history)
      }
    } else validator.showMessages()
  }
  
  return auth && !auth.loading && (
    <ResetPassword>
      <form onSubmit={e => onSubmit(e)}>
        <Container rowClasses="no-gutters">
          <div className="col-12">
            <Subtitle text="Reset your password." />

            {auth && !auth.loading && auth.resetPassword ? (
              <div className="reset-user">
                <div
                  styles={`background-image: url('${auth.resetPassword.user.picture}');`}
                  className="reset-user__picture"   
                />
                <div className="reset-user__content">
                  <h4 className="reset-user__name">
                    {auth.resetPassword.user.name}
                    {' '}
                    {auth.resetPassword.user.lastname}
                  </h4>
                  <p className="reset-user__username">
                    @{auth.resetPassword.user.username}
                  </p>
                </div>
              </div>
            ) : ''}

            <p className="mb-0 pb-0">
              Strong passwords include numbers, letters, and punctuation marks.
            </p>
          </div>

          <Field
            type="password"
            placeholder="Type your new password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          >
            {validator.message('password', password, 'required|min:6')}
          </Field>

          <Field
            type="password"
            placeholder="Type your new password one more time"
            name="newPassword"
            value={newPassword}
            onChange={e => onChange(e)}
          >
            {validator.message('newPassword', newPassword, 'required|min:6')}
          </Field>

          <div className="col-12 d-flex justify-content-end mt-4">
            <Button
              text="Reset Password"
              type="submit"
            />
          </div>
        </Container>
      </form>
    </ResetPassword>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(
  mapStateToProps,
  { forgotPassIsExpire, resetPassword }
)(ResetPasswordPage)
