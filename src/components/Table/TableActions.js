import React from 'react'
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline'
import { Link } from '@reach/router'

export const TableActions = ({ data }) => {
  return (
    <td className="px-6 py-3 whitespace-nowrap">
      <div className="flex items-center justify-center">
        <Link
          to={`./view/${data.user_id}`}
          className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
        >
          <EyeIcon />
        </Link>
        <Link
          to={`./edit/${data.user_id}`}
          className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
        >
          <PencilIcon />
        </Link>
        <Link 
        to={`./delete/${data.user_id}`}
        className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
          <TrashIcon />
        </Link>
      </div>
    </td>
  )
}
