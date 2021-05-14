import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

export const NavbarButton = ({
  IconButton,
  altLogo,
  titleButton,
  textButton
}) => (
  <li className="nav-item">
    <Link
      className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-black uppercase hover:scale-110 hover:opacity-60 transition ease-in-out duration-350 transform focus:outline-none"
      to="/"
      title={titleButton ? titleButton : ''}
    >
      <IconButton className="w-5" alt={altLogo} />{' '}
      <span className="ml-2">{textButton}</span>
    </Link>
  </li>
)

NavbarButton.propTypes = {
  IconButton: PropTypes.func.isRequired,
  altLogo: PropTypes.string.isRequired,
  titleButton: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired
}
