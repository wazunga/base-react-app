import React, { Fragment } from 'react'
import { SocialNetworks } from './SocialNetworks'

import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

export const Social = ({ description }) => (
  <Fragment>
    <div>
      <span className="text-base font-bold tracking-wide text-gray-900">
        Social
      </span>
      <div className="flex items-center mt-1 space-x-3">
        <SocialNetworks img={facebook} href="/" alt="facebook logo" />
        <SocialNetworks img={twitter} href="/" alt="twitter logo" />
        <SocialNetworks img={instagram} href="/" alt="instagram logo" />
      </div>
      <p className="mt-4 text-sm text-gray-500">{description}</p>
    </div>
  </Fragment>
)
