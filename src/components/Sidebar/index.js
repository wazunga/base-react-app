import React from 'react'
import { Sidenav } from './Sidenav'
import { SidenavLinks } from './SidenavLinks'
import { SidenavLinksContainer } from './SidenavLinksContainer'

export const Sidebar = () => (
  <Sidenav>
    <SidenavLinksContainer>
      <SidenavLinks title="link 1" link="/dashboard" />
      <SidenavLinks title="link 2" link="/dashboard" />
    </SidenavLinksContainer>
  </Sidenav>
)
