import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

export const ErrorDisplayButton = ({ btnLabel, to }) => (
  <>
    <Link
      to={to}
      className="px-3 py-2 mr-3 text-xs font-bold leading-snug text-black uppercase bg-green-400 hover:opacity-60 transition ease-in-out duration-350 transform hover:scale-110 focus:outline-none rounded-md"
    >
      {btnLabel}
    </Link>
  </>
)
ErrorDisplayButton.propTypes = {
  btnLabel: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}
