import React from 'react'
import PropTypes from 'prop-types'
import {SocialNetworks} from './SocialNetworks'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

export const Social = ({description}) => {	
	const SocialMain = ({children}) => (	
		<div className='lg:ml-20 lg:w-1/3 mb-3'>
				{children}
			</div>
	)
	const SocialNetworksFooter = ({children}) => (	
			<div className="flex items-center mt-1 space-x-3">
				{children}
			</div>
	)
	return(
		<SocialMain>
				<span className="text-base font-bold tracking-wide text-gray-900">
					Social
				</span>
			<SocialNetworksFooter>
				<SocialNetworks 
					img={facebook}
					href='/'
					alt='facebook logo'
				/>
				<SocialNetworks
					img={twitter}
					href='/'
					alt='twitter logo'
				/>
				<SocialNetworks
					img={instagram}
					href='/'
					alt='instagram logo'
				/>
			</SocialNetworksFooter>
			<p className="mt-2 text-sm text-gray-500">
				{description}
			</p>
		</SocialMain>
	)
}
Social.propTypes = {
	description: PropTypes.string.isRequired,
}
