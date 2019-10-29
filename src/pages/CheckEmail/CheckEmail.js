import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { ResetPassword } from '../../containers/ResetPassword'
import { Container } from '../../containers/Container'
import { Subtitle } from '../../components/Subtitle'

export const CheckEmail = ({
  emailSended
}) => !emailSended ? 
  <Redirect to="/forgot-password" /> :
  (
    <ResetPassword>
        <Container rowClasses="no-gutters">
          <div className="col-12 mb-4">
            <Subtitle text="Check your email." />
            <p className="mt-4">
              We've sent an email, Click the link in the email to reset your password.
            </p>
            <p className="mb-4">
              If you don't see the email, check other places it might be,
               like your junk, spam, social, or other folders.
            </p>
  
            <Link to="/forgot-password"><b> I didn't receive the email, try again. </b></Link>
          </div>
        </Container>
    </ResetPassword>
  )

const mapStateToProps = state => ({
  emailSended: state.auth.emailSended,
})
  
export default connect(
  mapStateToProps,
  {}
)(CheckEmail)