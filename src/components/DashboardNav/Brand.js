import React from 'react'

export const Brand = ({ title }) => (
  <a
    href="/dashboard"
    class="inline-block text-2xl font-bold tracking-wider text-blue-700 uppercase dark:text-light"
  >
    {title}
  </a>
)
