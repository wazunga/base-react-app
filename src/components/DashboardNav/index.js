import React from 'react'
import { Brand } from './Brand'
import { SubMenu } from './SubMenu'
import { Nav } from './Nav'
import { MobileMenuButton } from './MobileMenuButton'

export const DashboardNav = () => (
  <Nav>
    <MobileMenuButton />
    <Brand title="base-react-app" />
    <SubMenu />
  </Nav>
)
