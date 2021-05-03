import React from 'react'
import { Brand } from './Brand'
import { Buttons } from './Buttons'
import { Nav } from './Nav'
import { MobileMenuButton } from './MobileMenuButton'

export const DashboardNav = () => (
  <Nav>
    <MobileMenuButton />
    <Brand title="base-react-app" />
    <Buttons />
  </Nav>
)
