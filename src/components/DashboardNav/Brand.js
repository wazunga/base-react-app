import { Link } from '@reach/router'
import React from 'react'

export const Brand = ({ title }) => (
  <Link
    to="/dashboard"
    className="inline-block text-2xl font-bold tracking-wider text-blue-700 uppercase dark:text-light"
  >
    {title}
  </Link>
)
