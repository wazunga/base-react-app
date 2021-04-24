import React from 'react'

export const SidenavLinksContainer = ({ children }) => (
  <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
    {children}
  </nav>
)
