import React from 'react'
import { Sidenav } from './Sidenav'
import { SidenavLinks } from './SidenavLinks'
import { SidenavLinksContainer } from './SidenavLinksContainer'

const links = [
  { path: '/', title: 'action 1' },
  { path: '/', title: 'action 2' }
]

export const DashboardSidebar = () => (
  <Sidenav>
    <SidenavLinksContainer>
      <SidenavLinks title="link 1" path="link1" links={links} />
      <SidenavLinks title="link 2" path="link2" links={links} />
    </SidenavLinksContainer>
  </Sidenav>
)
