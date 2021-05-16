import React from 'react'
import { USERS_DATA, USERS_KEYS } from '../../../../data/store'
import {Table} from './Table'
import {TableBody} from './TableBody'
import {TableHeaders} from './TableHeaders'

export const UsersHome = ({ headers  }) => (
  <Table>
    <TableHeaders headers={headers} />
    <TableBody 
      data={USERS_DATA} 
      keys={USERS_KEYS}
    />
  </Table>
)
