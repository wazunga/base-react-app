import React from 'react'
import { SocialNetworks } from './SocialNetworks'

export const SocialNetworkList = ({ SocialNetworkListData }) => (
  <>
    {SocialNetworkListData.map((socialNetwork, id) => (
      <SocialNetworks
        key={id}
        img={socialNetwork.img}
        href={socialNetwork.href}
        alt={socialNetwork.alt}
      />
    ))}
  </>
)
