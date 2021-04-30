import React from 'react'
import PropTypes, { object } from 'prop-types'
import { LinksDropdown } from './LinksDropdown'

/** Componente que es parte de SidenavLinks, en donde se hace enlace
 * al modulo que hace referencia.
 */
export const SidenavLinks = (props) => {
  // TODO: Hacer el dropdown y agregar links del modulo

  return (
    <>
      <LinksDropdown {...props} />
    </>
  )
}

SidenavLinks.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(object)
}
