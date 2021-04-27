import React, { useState } from 'react'
import {NavbarCompanyInfo} from './NavbarCompanyInfo'
import {NavbarButtons} from './NavbarButtons'
import menu from '../../assets/menu.svg'
import loginLogo from '../../assets/login.svg'

export const Navbar= ({logo, companyName}) => {
	const [navbarOpen, setNavbarOpen]= useState(false)
	const NavbarMain = ({children}) => (	
		<nav className="relative flex block flex-wrap items-center justify-between px-4 py-3 bg-green-700">
			{children}
		</nav>
	)
	const NavbarCompany = ({children}) => (
		<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
			{children}
		</div>
	)
	return(
		<NavbarMain>
			<NavbarCompany>
				<NavbarCompanyInfo logo={logo} companyName = {companyName}/>
				<button
					className="text-black cursor-pointer text-xl w-12 leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
					type="button"
					onClick={() => setNavbarOpen(!navbarOpen)}
				>
					<img
						src={menu}
						alt='menu'
						className='w-8'
					/>
				</button>
			</NavbarCompany>
			<NavbarButtons 
				navbarOpen={navbarOpen} 
				loginLogo={loginLogo}
			/>
		</NavbarMain>
	)
}

