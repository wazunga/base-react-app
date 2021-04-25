import React from 'react'
import PropTypes from 'prop-types'

export const Contact = ({phone, email, address}) => {
	const ContactMain = ({children}) => (
		<div className='lg:mr-5 lg:ml-8 text-sm'>
			{children}	
		</div>
	)
	const ContactElement = ({label, value}) => (	
		<div className="flex">
			<p className="mr-1 text-gray-800">{label}: {value}</p>
		</div>
	)
	return(
		<ContactMain>
		  <p className="text-base font-bold tracking-wide text-gray-900">
				Contacts
		  </p>
			<ContactElement label='Phone' value={phone}/>
			<ContactElement label="Email" value={email}/>
			<ContactElement label='Address' value={address}/>
		</ContactMain>
	)
}

Contact.propTypes = {
	phone: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
}
