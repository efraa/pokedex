import React from 'react'
import { connect } from 'react-redux'

const Notification = ({ notifications, selector = 'notification' }) =>
  notifications && (
    <div className={`${selector}__container`}>
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={
            notification.notificationType === 200
              ? `${selector} ${selector}--success up`
              : `${selector} ${selector}--warning up`
          }
        >
          <p>{notification.msg}</p>
        </div>
      ))}
    </div>
  )

const mapStateToProps = state => ({
  notifications: state.notification,
})

export default connect(mapStateToProps)(Notification)
