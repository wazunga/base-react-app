import React from 'react'
import { Link } from '@reach/router'

export const NavbarButton = ({logo, altLogo, titleButton, textButton}) => (	
	<Link
		className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-60 transition ease-in-out duration-350 transform hover:scale-110"
		to="/"

		title={titleButton?titleButton:''}
	>
		<img src={logo} className='w-5' alt='altLogo'/> <span className="ml-2">{textButton}</span>
	</Link>
)
