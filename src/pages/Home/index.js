import React from 'react'
import {Footer} from '../../components/Footer/Footer'
import {Navbar} from '../../components/Navbar/Navbar'
import {ContentHome} from './ContentHome'
import companyLogo from '../../assets/logo.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

export const Home = () => {

	const infoCompanyData = { 
		companyInfo: 'Lacinia semper nibh. Aenean diam odio, scelerisque at, ullamcorper nec, tincidunt. Sit amet lectus. Fusce lacinia mauris vita nisl interdum condimentum. Etiam.',
		companyName: 'Wazunga Inc',
		companyLogo: companyLogo,
		phone: '878734-87346',
		email: 'example@example.com',
		address: 'Quis justo id tortor accumsan tempus. Cras vitae magna.', 
		descriptionContact: 'Bibendum orci leo blandit lacus. In id velit sodales arcu iaculis venenatis. Etiam at leo. Vivamus vitae sem. Mauris volutpat congue risus.',  
		SocialNetworkListData: [
			{
				href: '/',
				img: facebook,
				alt: 'facebook',
			},
			{
				href:'/',
				img: twitter,
				alt: 'twitter'
			},
			{
				href: '/',
				img: instagram,
				alt: 'instagram'
			},
		]
	}
	const HomeContainer = ({children}) => (
		<div>
			{children}
		</div>
	)
	return(
		<HomeContainer>
			<Navbar
				{...infoCompanyData}
			/>
			<ContentHome/>
			<Footer 
				className='bg-red-300'
				{...infoCompanyData}
			/>
		</HomeContainer>
	)
}

