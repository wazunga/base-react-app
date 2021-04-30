import React from 'react'
import PropTypes from 'prop-types'
import {NavbarCompanyInfo} from './NavbarCompanyInfo'
import {NavbarButtons} from './NavbarButtons'
import menu from '../../assets/menu.svg'
import {useIsOpen} from '../../hooks/useIsOpen'

export const Navbar= ({companyLogo, companyName}) => {
	const [isOpen, handleIsOpen]	= useIsOpen(false)
	const NavbarMain = ({children}) => (	
		<nav className="relative flex flex-wrap items-center justify-between block px-4 py-3 bg-green-700">
			{children}
		</nav>
	)
	const NavbarCompany = ({children}) => (
		<div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
			{children}
		</div>
	)
	return(
		<NavbarMain>
			<NavbarCompany>
				<NavbarCompanyInfo companyLogo={companyLogo} companyName = {companyName}/>
				<button
					className="block w-12 px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
					type="button"
					onClick={handleIsOpen}
				>
					<img
						src={menu}
						alt='menu'
						className='w-8'
					/>
				</button>
			</NavbarCompany>
			<NavbarButtons 
				isOpen={isOpen} 
			/>
		</NavbarMain>
	)
}
NavbarCompanyInfo.propTypes = {
	companyLogo: PropTypes.string.isRequired,
	companyName: PropTypes.string.isRequired,
}
