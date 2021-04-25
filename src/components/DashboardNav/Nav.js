import React from 'react'

export const Nav = ({ children }) => (
  <header className="relative bg-white dark:bg-darker">
    <div className="flex items-center justify-between p-2 border-b dark:border-blue-800">
      {children}
    </div>
  </header>
)
