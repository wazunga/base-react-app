import React, { Fragment } from 'react'
import { Link } from '@reach/router'

export const CopyrightLink = ({ text, href }) => (
  <Fragment>
    <Link
      to={href}
      className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
    >
      {text}
    </Link>
  </Fragment>
)
