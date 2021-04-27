import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'
import {NavbarButton} from './NavbarButton'

export const NavbarButtons = ({navbarOpen, loginLogo}) => {
	const ButtonsContainer = ({children}) => (	
		<div
			className={
					"lg:flex flex-grow items-center " +
					(navbarOpen ? " flex" : " hidden")
				}
				id="example-navbar-danger"
		>
			{children}
		</div>
	)
	return(
		<ButtonsContainer>
			<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
				<li className="nav-item">
					<NavbarButton  
						logo={loginLogo}
						altLogo='login-logo'
						textButton='Registrarse'
						titleButton='registarse'
					/>	
				</li>
			</ul>
		</ButtonsContainer>
	)
}

NavbarButtons.propTypes = {
	navbarOpen: PropTypes.bool.isRequired,
	login: PropTypes.string.isRequired,
}
