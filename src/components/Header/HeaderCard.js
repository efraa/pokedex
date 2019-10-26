import React from 'react'
import { connect } from 'react-redux'

const HeaderCard = ({ user, loading }) =>
  !loading &&
  user && (
    <div className="col-12 col-lg-6 d-flex justify-content-end align-items-center">
      <div className="header__user">
        <p className="header__user-name">
          {user.name}
          {user.surname && user.surname}
        </p>
        <div className="header__user-picture" />
      </div>
    </div>
  )

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
})

export default connect(mapStateToProps)(HeaderCard)
