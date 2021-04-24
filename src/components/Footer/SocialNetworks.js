import React, { Fragment } from 'react'
import { Link } from '@reach/router'

export const SocialNetworks = ({ href, img, alt }) => (
  <Fragment>
    <Link
      to={href}
      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
    >
      <img className="rounded-full w-6" src={img} alt={alt} />
    </Link>
  </Fragment>
)
