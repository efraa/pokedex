import React, { memo } from 'react'

export const Title = memo(({ text, className }) =>
  <h2 className={`title ${className}`}>{text}</h2>)
