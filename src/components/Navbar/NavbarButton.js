import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

export const NavbarButton = ({IconButton, altLogo, titleButton, textButton}) => (	
	<Link
		className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-black uppercase hover:opacity-60 transition ease-in-out duration-350 transform hover:scale-110 focus:outline-none"
		to="/"

		title={titleButton?titleButton:''}
	>
		<IconButton className='w-5' alt={altLogo}/> <span className="ml-2">{textButton}</span>
	</Link>
)

NavbarButton.propTypes = {
	IconButton: PropTypes.func.isRequired,
	altLogo: PropTypes.string.isRequired,
	titleButton: PropTypes.string.isRequired,
	textButton: PropTypes.string.isRequired
}
