import React, { memo } from 'react'

export const Button = memo(({ type, onClick, text, classes }) => (
  <button
    type={type || 'button'}
    className={classes ? `button ${classes}` : 'button'}
    onClick={onClick}
  >
    {text}
  </button>
))
