import React from 'react'
import {CopyrightLink} from './CopyrightLink'
import PropTypes from 'prop-types'

export const Copyright = ({companyName}) => {	
	const CopyrightMain = ({children}) => (
			<div className="flex flex-col lg:justify-between px-10 lg:flex-row pt-5 pb-10 border-t">
				{children}
			</div>
	)
	return(
		<CopyrightMain>
			<p className="text-sm text-gray-600 w-auto text-center md:text-right">
				© Copyright 2020 {companyName}. All rights reserved.
			</p>
			<ul className="flex flex-col sm:flex-row mb-3 justify-center md:justify-end">
				<li className='mr-4 text-center'>
					<CopyrightLink
						text='F.A.Q'
						href='/'
					/>
				</li>
				<li className='mr-4 text-center'>
					<CopyrightLink
						text='Privacy Policy'
						href='/'
					/>
				</li>
				<li className='min-w-min text-center'>
					<CopyrightLink
						text= 'Terms &amp; Conditions'
						href='/'
					/>
				</li>
			</ul>
		</CopyrightMain>
	)
}

Copyright.propTypes = {
	companyName: PropTypes.string.isRequired,	
}
