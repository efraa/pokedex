import React, { memo } from 'react'

export const Container = memo(({ children, rowClasses }) => (
  <div className="container">
    <div className={rowClasses ? `row ${rowClasses}` : 'row'}>
      { children }
    </div>
  </div>
))
