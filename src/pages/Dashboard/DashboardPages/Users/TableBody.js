import React from 'react'
import { TableActions } from './TableActions'

export const TableBody = ({ data, keys }) => (
  <tbody className="text-sm font-light text-gray-600">
    {data.map((row, key) => (
      <tr key={key} className="border-b border-gray-200 hover:bg-gray-100">
        {keys.map((key, keyValue) => {
          if (keyValue < 1)
            return (
              <td
                key={keyValue}
                className="px-6 py-3 text-left whitespace-nowrap"
              >
                <div className="flex items-center">
                  <span className="font-medium">{row[key]}</span>
                </div>
              </td>
            )
          return (
            <td
              key={keyValue}
              className="px-6 py-3 text-center whitespace-nowrap"
            >
              <div className="flex items-center justify-center">
                <span className="font-medium">{row[key]}</span>
              </div>
            </td>
          )
        })}
        <TableActions key={key} />
      </tr>
    ))}
  </tbody>
)
