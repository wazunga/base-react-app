import React from 'react'
import { HomeIcon, ChevronDownIcon } from '@heroicons/react/outline'

/** Componente que es parte de SidenavLinks, en donde se hace enlace
 * al modulo que hace referencia.
 */
export const SidenavLinks = (props) => {
  // Header del grupo de links
  const Header = ({ title }) => (
    <a
      className="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-blue-100 dark:hover:bg-blue-600"
      href="/"
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
    </a>
  )
  // TODO: Hacer el dropdown y agregar links del modulo
  return (
    <>
      <Header {...props} />
    </>
  )
}