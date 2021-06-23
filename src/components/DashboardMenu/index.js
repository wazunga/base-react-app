import React from 'react'
import { UserIcon } from '@heroicons/react/outline'
import {
  UserRoutes,
  TestRoutes
} from '../../config/routes'
import { DashboardMenuItem } from './DashboardMenuItem'

export const DashboardMenu = () => (
  <>
    <DashboardMenuItem
      title="Usuarios"
      path="users"
      links={UserRoutes}
      Icon={UserIcon}
    />
    <DashboardMenuItem title="link 2" path="link2" links={TestRoutes} />
  </>
)
