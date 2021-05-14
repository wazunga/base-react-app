import React from 'react'
import PropTypes from 'prop-types'
import { NavbarCompanyInfo } from './NavbarCompanyInfo'
import { NavbarButtons } from './NavbarButtons'
import { useIsOpen } from '../../hooks/useIsOpen'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export const Navbar = (props) => {
  const [isOpen, handleIsOpen] = useIsOpen(false)
  const NavbarMain = ({ children }) => (
    <nav className="fixed z-50 flex flex-wrap items-center justify-between block w-screen px-4 py-3 bg-green-700">
      {children}
    </nav>
  )
  const NavbarCompany = ({ children }) => (
    <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
      {children}
    </div>
  )
  return (
    <NavbarMain>
      <NavbarCompany>
        <NavbarCompanyInfo {...props} />
        <button
          className="block w-12 px-3 py-1 mr-3 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer hover:opacity-50 lg:hidden focus:outline-none"
          type="button"
          onClick={handleIsOpen}
        >
          {isOpen ? (
            <XIcon alt="menu" className="w-8" />
          ) : (
            <MenuIcon alt="menu" className="w-8" />
          )}
        </button>
      </NavbarCompany>
      <NavbarButtons isOpen={isOpen} />
    </NavbarMain>
  )
}
NavbarCompanyInfo.propTypes = {
  companyLogo: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired
}
