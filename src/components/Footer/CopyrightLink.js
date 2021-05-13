import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

export const CopyrightLink = ({ text, href }) => (
  <>
    <Link
      to={href}
      className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
    >
      {text}
    </Link>
  </>
)
CopyrightLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}
