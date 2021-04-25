import React from 'react'
import { Link } from '@reach/router'

export const CompanyInfo = ({companyInfo, logo, companyName}) => {
	
	const CompanyInfoMain = ({children}) => (	
		<div className="mr-12 mb-3">
			{children}
		</div>
	)
	return(
		<CompanyInfoMain>	
			<Link
				to="/"
				aria-label="Go home"
				title="Company"
				className="inline-flex items-center"
			>
				<img 
					src={logo}
					className='w-7'
					alt='logo empresa'
				/>
				<span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
					{companyName}
				</span>
			</Link>
			<div className="mt-2 lg:max-w-sm">
				<p className="text-sm text-gray-800">
					{companyInfo}
				</p>
			</div>
		</CompanyInfoMain>
	)
}

