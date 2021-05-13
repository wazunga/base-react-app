import React from 'react'
import PropTypes from 'prop-types'
import {NavbarButton} from './NavbarButton'
import { LoginIcon } from '@heroicons/react/outline'

export const NavbarButtons = ({isOpen}) => {
	const ButtonsContainer = ({children}) => (	
		<div
			className={
					"transition-all duration-400  lg:flex flex-grow items-center " +
					(isOpen ? " flex" : " hidden")
				}
				id="example-navbar-danger"
		>
			{children}
		</div>
	)
	return(
		<ButtonsContainer>
			<ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
				<NavbarButton  
					IconButton={LoginIcon}
					altLogo='login-logo'
					textButton='Registrarse'
					titleButton='registarse'
				/>	
				<NavbarButton  
					IconButton={LoginIcon}
					altLogo='login-logo'
					textButton='Registrarse'
					titleButton='registarse'
				/>	
			</ul>
		</ButtonsContainer>
	)
}

NavbarButtons.propTypes = {
	isOpen: PropTypes.bool.isRequired,
}
