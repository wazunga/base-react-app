import React from 'react'
import { Brand } from './Brand'
import { SubMenu } from './SubMenu'
import { Nav } from './Nav'
import { MobileMenuButton } from './MobileMenuButton'
import { MobileSubMenuButton } from './MobileSubMenuButton'
import { useIsOpen } from '../../hooks/useIsOpen'
import { MobileMenu } from './MobileMenu'
import { MobileSubMenu } from './MobileSubMenu'

export const DashboardNav = () => {
  const [isMenuOpen, handleIsMenuOpen] = useIsOpen(false)
  const [isSubMenuOpen, handleIsSubMenuOpen] = useIsOpen(false)

  return (
    <header className="relative bg-white dark:bg-darker">
      <Nav>
        <MobileMenuButton onClickMenu={handleIsMenuOpen} />
        <Brand title="base-react-app" />
        <MobileSubMenuButton onClickSubMenu={handleIsSubMenuOpen} />
        <SubMenu />
      </Nav>
      <MobileMenu isMenuOpen={isMenuOpen} />
      <MobileSubMenu isSubMenuOpen={isSubMenuOpen} />
    </header>
  )
}
