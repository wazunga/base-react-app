import React from 'react'
import { CompanyInfo } from './CompanyInfo'
import { Contact } from './Contact'
import { Social } from './Social'
import { Copyright } from './Copyright'

export const Footer = ({ infoCompanyData }) => {
  const FooterMain = ({ children }) => (
    <footer className="md:px-24 lg:px-8 w-screen mt-8">{children}</footer>
  )
  const FooterInfo = ({ children }) => (
    <div className="flex flex-col items-start lg:flex-row lg:justify-between px-10">
      {children}
    </div>
  )

  return (
    <FooterMain>
      <FooterInfo>
        <CompanyInfo {...infoCompanyData} />
        <Contact {...infoCompanyData} />
        <Social {...infoCompanyData} />
      </FooterInfo>
      <Copyright {...infoCompanyData} />
    </FooterMain>
  )
}
