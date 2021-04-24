import React from 'react'
import { CompanyInfo } from './CompanyInfo'
import {Contact} from './Contact'
import {Social} from './Social'
import {Copyright} from './Copyright'

import logo from '../../assets/logo.svg'

export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
		<CompanyInfo
			companyInfo= 'Dui non quam. Duis posuere tortor sit amet est iaculis egestas. Ut at magna. Etiam dui nisi,
			blandit quis, fermentum vitae, auctor. A augue. Pellentesque sed
			est. Mauris cursus urna id lectus. Integer. '
			logo={logo}
			companyName='Company test'
		/>
		<Contact 
			phone='83637-86376'
			email='example@example.com'
			address='Pede. Duis sed tortor. Phasellus egestas porta lectus.
			Aliquam.'
		/>
		<Social 
			description='Commodo. Vestibulum enim felis, interdum non,
			sollicitudin in, posuere a, sem.' 
		/>
      </div>
		
	  <Copyright
		empresa='Wazunga Inc'
	  />

    </div>
  );
};

