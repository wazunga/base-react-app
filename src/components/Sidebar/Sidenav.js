import React from 'react'

export const Sidenav = ({ children }) => (
  <aside className="flex-shrink-0 hidden w-64 bg-white border-r dark:border-blue-800 dark:bg-darker md:block">
    <div className="flex flex-col h-full">
      {children}
    </div>
  </aside>
)
