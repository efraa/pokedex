import React, { memo } from 'react'
import { connect } from 'react-redux'

import { Container } from '../../containers/Container'
import { Button } from '../../components/Forms/Button'

// Actions
import { logout } from '../../store/actions'

const LogoutPage = memo(({ logout }) => {
  const onSubmit = e => {
    e.preventDefault()
    logout()
  }

  return (
    <div className="logout fade">
      <Container>
        <form className="col-12 col-md-8 col-lg-5 logout__form" onSubmit={e => onSubmit(e)}>
          <div className="logout__container">
            <div className="logout__content">
              <h2 className="logout__title">
                Log out of Pokedex?
              </h2>
              <p className="logout__text">
                You can always log back in at any time.
              </p>
            </div>
            <div className="logout__buttons mt-4">
              <Button
                text="Cancel"
                classes="button--secoundary mr-3"
                onClick={e => window.history.back()}
              />
              <Button
                text="Log out"
                type="submit"
              />
            </div>  
          </div>
        </form>
      </Container>
    </div>
  )
})

export default connect(null, { logout })(LogoutPage)
