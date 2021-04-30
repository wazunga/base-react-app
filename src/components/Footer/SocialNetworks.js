import React, { Fragment } from 'react'
import { Link } from '@reach/router'

export const SocialNetworks = ({href, img, alt}) => (
	<Fragment>	
			<Link
				to={href}
				className="transition transform hover:scale-125 duration-350 hover:opacity-60 focus:outline-none"
			>
				<img
					className='w-6 rounded-full'
					src={img}
					alt={alt}
				/>
      </Link>
	</Fragment>
)
