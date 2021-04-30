import React from 'react'
import PropTypes from 'prop-types'
import { CompanyInfo } from './CompanyInfo'
import { Contact } from './Contact'
import { Social } from './Social'
import { Copyright } from './Copyright'


export const Footer = (props) => {
	const FooterMain = ({children}) => (	
		<footer style={{marginTop: "5vh"}}  className="w-screen pt-16 md:px-24 lg:px-8">
			{children}
		</footer>
	)
	const FooterInfo = ({children}) => (	
			<div className="flex flex-col items-start px-10 lg:flex-row lg:justify-between">
				{children}
			</div>
	)

  return (
		<FooterMain>
			<FooterInfo>
				<CompanyInfo
					{...props}
				/>
				<Contact 
					{...props}
				/>
				<Social 
					{...props}
				/>
			</FooterInfo>	
			<Copyright
				{...props}
			/>
    </FooterMain>
  )
};

Footer.propTypes = {
	companyInfo: PropTypes.string.isRequired,
	companyName: PropTypes.string.isRequired,
	companyLogo: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	descriptionContact: PropTypes.string.isRequired,
	SocialNetworkListData: PropTypes.arrayOf(
		PropTypes.shape({
			href: PropTypes.string.isRequired,
			img: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired,
		})
	),
}



