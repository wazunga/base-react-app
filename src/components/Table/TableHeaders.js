import React from 'react'

export const TableHeaders = ({ headers }) => (
  <thead>
    <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
      {headers.map((header, key) => {
        if (key < 1) return <th className="px-6 py-3 text-left">{header}</th>
        return <th className="px-6 py-3 text-center">{header}</th>
      })}
    </tr>
  </thead>
)
