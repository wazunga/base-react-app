import React from 'react'
import { Table } from '../../../../components/Table'
import { UserSchema } from '../../../../schema'

export const UsersHome = ({ users }) => {
  return (
    <Table
      headers={UserSchema.tableHeaders}
      data={users}
      keys={UserSchema.keys}
    />
  )
}
