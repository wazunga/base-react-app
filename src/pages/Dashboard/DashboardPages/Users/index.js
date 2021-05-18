import React from 'react'
import { Router } from '@reach/router'
import { DashboardSection } from '../../DashboardSection'
import { DashboardSectionTitle } from '../../DashboardSectionTitle'
import { DashboardSectionContent } from '../../DashboardSectionContent'
import { UsersHome } from './UsersHome'
import { UserNew } from './UserNew'
import { UserEdit } from './UserEdit'
import { UserDelete } from './UserDelete'
import { UserDetail } from './UsersDetail'

export const Users = () => {
  const Section = ({ title }) => (
    <div className="h-full bg-gray-50">
      <h1 className="text-2xl">{title}</h1>
    </div>
  )

  return (
    <DashboardSection>
      <DashboardSectionTitle title="Usuarios" />
      <DashboardSectionContent>
        <Router>
          <UsersHome
            path="/"
            title="Ver"
            headers={['Nombre', 'Username', 'Status', 'Rol', 'Actions']}
          />
          <UserNew path="create" />
          <UserEdit path="edit/:id" />
          <UserDelete path="delete/:id" />
          <UserDetail path="view/:id" />
          <Section default title="Not found" />
        </Router>
      </DashboardSectionContent>
    </DashboardSection>
  )
}
