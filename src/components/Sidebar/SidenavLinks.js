import React from 'react'
import PropTypes from 'prop-types'
import { HomeIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { Link } from '@reach/router'

/** Componente que es parte de SidenavLinks, en donde se hace enlace
 * al modulo que hace referencia.
 */
export const SidenavLinks = (props) => {
  // Header del grupo de links
  const Header = ({ title, link }) => (
    <Link
      className="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-blue-100 dark:hover:bg-blue-600"
      to={link}
    >
      {/* Module icon*/}
      <span>
        {' '}
        <HomeIcon className="w-5 h-5" />{' '}
      </span>
      <span className="ml-2 text-sm">{title}</span>
      <span className="ml-auto">
        {' '}
        <ChevronDownIcon className="w-5 h-5" />{' '}
      </span>
    </Link>
  )
  // TODO: Hacer el dropdown y agregar links del modulo
  return (
    <>
      <Header {...props} />
    </>
  )
}

SidenavLinks.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}