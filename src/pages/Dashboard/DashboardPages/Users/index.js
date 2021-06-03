import React from 'react'
import { Router } from '@reach/router'
import { useSelector } from 'react-redux'
import { createSelector } from 'selector'
import { DashboardSection } from '../../DashboardSection'
import { DashboardSectionTitle } from '../../DashboardSectionTitle'
import { DashboardSectionContent } from '../../DashboardSectionContent'
import { UsersHome } from './UsersHome'
import { UserNew } from './UserNew'
import { UserEdit } from './UserEdit'
import { UserDelete } from './UserDelete'
import { UserDetail } from './UsersDetail'
import { saveUser, updateUser } from '../../../../redux/actions/usersActions'

const Section = ({ title }) => (
  <div className="h-full bg-gray-50">
    <h1 className="text-2xl">{title}</h1>
  </div>
)

const usersSelector = createSelector((state) => state.users.data)

export const Users = () => {
  const users = useSelector(usersSelector)

  return (
    <DashboardSection>
      <DashboardSectionTitle title="Usuarios" />
      <DashboardSectionContent>
        <Router>
          <UsersHome users={users} path="/" title="Ver" />
          <UserNew path="create" toDispatch={saveUser} />
          <UserEdit
            path="edit/:id"
            users={users}
            toDispatch={updateUser}
            isUpdate={true}
          />
          <UserDelete path="delete/:id" users={users} />
          <UserDetail path="view/:id" users={users} />
          <Section default title="Not found" />
        </Router>
      </DashboardSectionContent>
    </DashboardSection>
  )
}
