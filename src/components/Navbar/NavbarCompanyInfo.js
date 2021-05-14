import React from 'react'
import { Link } from '@reach/router'

export const NavbarCompanyInfo = ({ companyLogo, companyName }) => (
  <Link
    className="inline-flex py-2 mr-4 text-sm font-bold text-white uppercase whitespace-nowrap"
    to="/"
  >
    <img src={companyLogo} className="w-8 mx-3 rounded-full" alt="logo" />
    <span className="text-xl font-bold tracking-wide uppercase">
      {companyName}
    </span>
  </Link>
)
