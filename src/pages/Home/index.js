import React, {Fragment} from 'react'
import {Footer} from '../../components/Footer/Footer'
import {Navbar} from '../../components/Navbar/Navbar'
import logo from '../../assets/logo.svg'

const Home = () => {
	
	const infoCompanyData = { 
		companyInfo: 'Lacinia semper nibh. Aenean diam odio, scelerisque at, ullamcorper nec, tincidunt. Sit amet lectus. Fusce lacinia mauris vita nisl interdum condimentum. Etiam.',
		companyName: 'Wazunga Inc',
		logo: logo,
		phone: '878734-87346',
		email: 'example@example.com',
		address: 'Quis justo id tortor accumsan tempus. Cras vitae magna.', 
		description: 'Bibendum orci leo blandit lacus. In id velit sodales arcu iaculis venenatis. Etiam at leo. Vivamus vitae sem. Mauris volutpat congue risus.' 
	}
	return(
		<Fragment>
			<Navbar
				{...infoCompanyData}
			/>
			<Footer 
				className='bg-red-300'
				infoCompanyData = {infoCompanyData}
			/>
		</Fragment>
	)
}

export default Home

//tipado de los props
//objeto json de los datos de la empresa
//custom container
//cuando se pasan props por mas de un nivel se usa ...props
