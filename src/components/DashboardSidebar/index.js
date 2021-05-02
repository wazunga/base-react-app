import React from 'react'
import { Sidenav } from './Sidenav'
import { SidenavLinks } from './SidenavLinks'
import { SidenavLinksContainer } from './SidenavLinksContainer'

const links = [
  { path: '/', title: 'action 1' },
  { path: '/', title: 'action 2' }
]

const userLinks = [
  { path: './users', title: 'Ver usuarios' },
  { path: './users/create', title: 'Crear usuarios' },
  { path: './users/edit', title: 'Editar usuarios' },
  { path: './users/delete', title: 'Borrar usuarios' }
]

export const DashboardSidebar = () => (
  <Sidenav>
    <SidenavLinksContainer>
      <SidenavLinks title="Usuarios" path="users" links={userLinks} />
      <SidenavLinks title="link 2" path="link2" links={links} />
    </SidenavLinksContainer>
  </Sidenav>
)
