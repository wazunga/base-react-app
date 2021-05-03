import React from 'react'
import { UserRoutes, TestRoutes } from '../../config/routes'
import { DashboardMenuItem } from './DashboardMenuItem'

export const DashboardMenu = () => (
  <>
    <DashboardMenuItem title="Usuarios" path="users" links={UserRoutes} />
    <DashboardMenuItem title="link 2" path="link2" links={TestRoutes} />
  </>
)
