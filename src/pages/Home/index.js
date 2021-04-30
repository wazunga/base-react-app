import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { ContentHome } from './ContentHome'
import logo from '../../assets/logo.svg'

export const Home = () => {
  const infoCompanyData = {
    companyInfo:
      'Lacinia semper nibh. Aenean diam odio, scelerisque at, ullamcorper nec, tincidunt. Sit amet lectus. Fusce lacinia mauris vita nisl interdum condimentum. Etiam.',
    companyName: 'Wazunga Inc',
    logo: logo,
    phone: '878734-87346',
    email: 'example@example.com',
    address: 'Quis justo id tortor accumsan tempus. Cras vitae magna.',
    description:
      'Bibendum orci leo blandit lacus. In id velit sodales arcu iaculis venenatis. Etiam at leo. Vivamus vitae sem. Mauris volutpat congue risus.'
  }
  const HomeContainer = ({ children }) => <div>{children}</div>
  return (
    <HomeContainer>
      <Navbar {...infoCompanyData} />
      <ContentHome />
      <Footer className="bg-red-300" infoCompanyData={infoCompanyData} />
    </HomeContainer>
  )
}
