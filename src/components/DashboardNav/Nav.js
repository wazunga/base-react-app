import React from 'react'

export const Nav = ({ children }) => (
  <div className="flex items-center justify-between p-2 border-b dark:border-blue-800">
    {children}
  </div>
)
