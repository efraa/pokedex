import React, { memo } from 'react'

export const Button = memo(({ type, wrapper, onClick, label, classes }) => (
  <div className={`col-12 ${wrapper || ''}`}>
    <div className={`form__field ${classes}`}>
      <button
        type={type || 'button'}
        className="btn form__button"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  </div>
))
