import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

export const NavbarCompanyInfo = ({ logo, companyName }) => (
  <Link
    className="text-sm font-bold  inline-flex mr-4 py-2 whitespace-nowrap uppercase text-gray-800"
    to="/"
  >
    <img src={logo} className="rounded-full w-8 mx-3" alt="logo" />
    <span className="text-xl font-bold tracking-wide uppercase">
      {companyName}
    </span>
  </Link>
)

NavbarCompanyInfo.propTypes = {
  logo: PropTypes.string.isRequired,
  companyName: PropTypes.isRequired
}
