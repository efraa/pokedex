import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const Back = memo(({ to }) => <Link to={to} className="back" />)

export default Back
