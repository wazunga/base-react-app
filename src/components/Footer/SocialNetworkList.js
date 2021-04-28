import React, {Fragment} from 'react'
import {SocialNetworks} from './SocialNetworks'

export const SocialNetworkList = ({SocialNetworkListData}) => (
	<Fragment>
		{
			SocialNetworkListData.map((socialNetwork, id) => (
				<SocialNetworks
					id={id}
					img={socialNetwork.img}
					href={socialNetwork.href}
					alt={socialNetwork.alt}
				/>	
			))
		}
	</Fragment>
)

