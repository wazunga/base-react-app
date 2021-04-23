import React from 'react'
import CompanyInfo from './CompanyInfo'
import Contact from './Contact'
import Social from './Social'
import Copyright from './Copyright'

export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
		<CompanyInfo/>
		<Contact/>
		<Social/>
      </div>
		
	  <Copyright/>

    </div>
  );
};

export default Footer;
