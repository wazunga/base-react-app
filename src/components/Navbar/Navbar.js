import React, { useState } from 'react'
import { NavbarCompanyInfo } from './NavbarCompanyInfo'
import { NavbarButtons } from './NavbarButtons'
import menu from '../../assets/menu.svg'
import { LoginIcon } from '@heroicons/react/outline'

export const Navbar = ({ logo, companyName }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const NavbarMain = ({ children }) => (
    <nav className="relative flex flex-wrap items-center justify-between block px-4 py-3 bg-green-700">
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
        <NavbarCompanyInfo logo={logo} companyName={companyName} />
        <button
          className="block w-12 px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <img src={menu} alt="menu" className="w-8" />
        </button>
      </NavbarCompany>
      <NavbarButtons navbarOpen={navbarOpen} LoginIcon={LoginIcon} />
    </NavbarMain>
  )
}
