import React, { memo } from 'react'
import { Link } from 'react-router-dom'

export const Back = memo(({ to }) => <Link to={to} className="back" />)
