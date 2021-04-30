import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

export const NavbarButtons = ({navbarOpen, LoginIcon}) => (
	<div
		className={
				"lg:flex flex-grow items-center " +
				(navbarOpen ? " flex" : " hidden")
			}
			id="example-navbar-danger"
	>	
		<ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
			<li className="nav-item">
				<Link
					className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
					to="/"
				>
					<LoginIcon className='w-5' alt='login-logo'/> <span className="ml-2">Registrarse</span>
				</Link>
			</li>
		</ul>
	</div>
)
NavbarButtons.propTypes = {
	navbarOpen: PropTypes.bool.isRequired,
	login: PropTypes.string.isRequired,
}
