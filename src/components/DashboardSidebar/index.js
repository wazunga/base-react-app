import React from 'react'
import { Sidenav } from './Sidenav'
import { SidenavLinks } from './SidenavLinks'
import { SidenavLinksContainer } from './SidenavLinksContainer'

export const DashboardSidebar = () => (
  <Sidenav>
    <SidenavLinksContainer>
      <SidenavLinks title="link 1" link="link1" />
      <SidenavLinks title="link 2" link="link2" />
    </SidenavLinksContainer>
  </Sidenav>
)
