import React, { Fragment } from 'react'
import { CopyrightLink } from './CopyrightLink'

export const Copyright = ({ empresa }) => (
  <Fragment>
    <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
      <p className="text-sm text-gray-600">
        © Copyright 2020 {empresa}. All rights reserved.
      </p>
      <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
        <li>
          <CopyrightLink text="F.A.Q" href="/" />
        </li>
        <li>
          <CopyrightLink text="Privacy Policy" href="/" />
        </li>
        <li>
          <CopyrightLink text="Terms &amp; Conditions" href="/" />
        </li>
      </ul>
    </div>
  </Fragment>
)
