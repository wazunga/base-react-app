import React from 'react'
import { Router } from '@reach/router'
import { DashboardSection } from '../../DashboardSection'
import { DashboardSectionTitle } from '../../DashboardSectionTitle'
import { DashboardSectionContent } from '../../DashboardSectionContent'
import { UsersHome } from './UsersHome'
import { UsersForm } from './UsersForm'

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
          <UsersHome path="/" title="Ver" />
          <UsersForm path="create" />
          <Section path="edit" title="Update" />
          <Section path="edit/1" title="Update with param" />
          <Section path="delete" title="Delete" />
          <Section default title="Not found" />
        </Router>
      </DashboardSectionContent>
    </DashboardSection>
  )
}
