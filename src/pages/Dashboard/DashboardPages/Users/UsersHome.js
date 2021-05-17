import React from 'react'
import { USERS_DATA, USERS_KEYS } from '../../../../data/store'
import { Table } from '../../../../components/Table'

export const UsersHome = ({ headers }) => (
  <Table headers={headers} data={USERS_DATA} keys={USERS_KEYS} />
)
