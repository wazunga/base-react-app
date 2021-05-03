import React from 'react'
import { Sidenav } from './Sidenav'
import { SidenavLinksContainer } from './SidenavLinksContainer'
import { DashboardMenu } from '../DashboardMenu'

export const DashboardSidebar = () => (
  <Sidenav>
    <SidenavLinksContainer>
      <DashboardMenu />
    </SidenavLinksContainer>
  </Sidenav>
)
