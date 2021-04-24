import React, { Fragment } from 'react'
import { Link } from '@reach/router'

export const CompanyInfo = ({ companyInfo, logo, companyName }) => (
  <Fragment>
    <div className="sm:col-span-2">
      <Link
        to="/"
        aria-label="Go home"
        title="Company"
        className="inline-flex items-center"
      >
        <img src={logo} className="w-7" alt="logo empresa" />
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
          {companyName}
        </span>
      </Link>
      <div className="mt-6 lg:max-w-sm">
        <p className="text-sm text-gray-800">{companyInfo}</p>
      </div>
    </div>
  </Fragment>
)
