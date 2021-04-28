import React from 'react'
import PropTypes from 'prop-types'
import {SocialNetworkList} from './SocialNetworkList'
export const Social = ({descriptionContact, SocialNetworkListData}) => {	
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
				<SocialNetworkList
					SocialNetworkListData={SocialNetworkListData}
				/>
			</SocialNetworksFooter>
			<p className="mt-2 text-sm text-gray-500">
				{descriptionContact}
			</p>
		</SocialMain>
	)
}
Social.propTypes = {
	descriptionContact: PropTypes.string.isRequired,
}
