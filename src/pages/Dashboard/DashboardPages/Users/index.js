import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'selector'
import { DashboardSection } from '../../DashboardSection'
import { DashboardSectionTitle } from '../../DashboardSectionTitle'
import { DashboardSectionContent } from '../../DashboardSectionContent'
import { UsersHome } from './UsersHome'
import { UserNew } from './UserNew'
import { UserEdit } from './UserEdit'
import { UserDelete } from './UserDelete'
import { UserDetail } from './UsersDetail'
import { saveUser, thunkFecthUsers } from '../../../../redux/actions/usersActions'
import { WobblingLoader } from '../../../../components/WobblingLoader'

const Section = ({ title }) => (
	<div className="h-full bg-gray-50">
		<h1 className="text-2xl">{title}</h1>
	</div>
)

const usersSelector = createSelector(
	(state) => state.users.data
)

export const Users = () => {
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)
	// const [data, loading] = useFetch('users')
	// dispatch(fetchUsers(data.result.users))

	useEffect(() => {
		const fetch = async () => {
			console.log('fetching')
			setLoading(true)
			await dispatch(thunkFecthUsers)
			setLoading(false)
		}

		fetch()
	}, [dispatch])

	const users = useSelector(usersSelector)

	if (loading) return <WobblingLoader />

		return (
			<DashboardSection>
				<DashboardSectionTitle title="Usuarios" />
				<DashboardSectionContent>
					<Router>
						<UsersHome users={users} path="/" title="Ver" />
						<UserNew path="create" toDispatch={saveUser} />
						<UserEdit path="edit/:id" users={users} />
						<UserDelete path="delete/:id" users={users} />
						<UserDetail path="view/:id" users={users} />
						<Section default title="Not found" />
					</Router>
				</DashboardSectionContent>
			</DashboardSection>
		)
}
