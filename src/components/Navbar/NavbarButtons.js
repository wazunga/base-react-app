import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

export const NavbarButtons = ({navbarOpen, loginLogo}) => (
	<div
		className={
				"lg:flex flex-grow items-center " +
				(navbarOpen ? " flex" : " hidden")
			}
			id="example-navbar-danger"
	>	
		<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
			<li className="nav-item">
				<Link
					className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-60 transition ease-in-out duration-700 transform hover:scale-110"
					to="/"
					title='login'
				>
					<img src={loginLogo} className='w-5' alt='login-logo'/> <span className="ml-2">Registrarse</span>
				</Link>
			</li>
		</ul>
	</div>
)
NavbarButtons.propTypes = {
	navbarOpen: PropTypes.bool.isRequired,
	login: PropTypes.string.isRequired,
}
