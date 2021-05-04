import React from 'react'
import PropTypes from 'prop-types'
import { MenuIcon } from '@heroicons/react/outline'

export const MobileMenuButton = ({ onClickMenu }) => (
  <button
    onClick={onClickMenu}
    className="p-1 text-blue-400 transition-colors duration-200 rounded-md bg-blue-50 hover:text-blue-600 hover:bg-blue-100 dark:hover:text-light dark:hover:bg-blue-700 dark:bg-dark md:hidden focus:outline-none focus:ring"
  >
    <span className="sr-only">Open main menu</span>
    <span>
      <MenuIcon className="w-8 h-8" />{' '}
    </span>
  </button>
)

MobileMenuButton.propTypes = {
  onClickMenu: PropTypes.func.isRequired
}
