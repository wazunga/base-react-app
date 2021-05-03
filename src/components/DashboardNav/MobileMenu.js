import React from 'react'
import { DashboardMenu } from '../DashboardMenu'

export const MobileMenu = ({ isMenuOpen }) => (
  <>
    {isMenuOpen && (
      <div className="border-b md:hidden dark:border-blue-800">
        <DashboardMenu />
      </div>
    )}
  </>
)
