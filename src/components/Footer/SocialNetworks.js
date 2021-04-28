import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

export const SocialNetworks = ({href, img, alt}) => (
	<Fragment>	
			<Link
				to={href}
				className="transition transform hover:scale-125 duration-350 hover:opacity-60 focus:outline-none"
			>
				<img
					className='rounded-full w-6'
					src={img}
					alt={alt}
				/>
      </Link>
	</Fragment>
)
SocialNetworks.propTypes = {
	href: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
}
