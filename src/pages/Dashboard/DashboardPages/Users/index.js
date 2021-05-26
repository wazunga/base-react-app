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
import { useFetch } from '../../../../hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../../../actions/users'
import { WobblingLoader } from '../../../../components/WobblingLoader'

export const Users = () => {
  const Section = ({ title }) => (
    <div className="h-full bg-gray-50">
      <h1 className="text-2xl">{title}</h1>
    </div>
  )
  const [data, loading] = useFetch('users')

  // redux hooks
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  if (loading) return <WobblingLoader />

  dispatch(fetchUsers(data.result['users']))

  return (
    <DashboardSection>
      <DashboardSectionTitle title="Usuarios" />
      <DashboardSectionContent>
        <Router>
          <UsersHome users={users} path="/" title="Ver" />
          <UserNew path="create" />
          <UserEdit path="edit/:id" users={users} />
          <UserDelete path="delete/:id" users={users} />
          <UserDetail path="view/:id" users={users} />
          <Section default title="Not found" />
        </Router>
      </DashboardSectionContent>
    </DashboardSection>
  )
}
