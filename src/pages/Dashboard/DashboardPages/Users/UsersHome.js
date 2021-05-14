import React from 'react'
import { USERS_DATA } from '../../../../data/store'

export const UsersHome = () => (
  <div className="overflow-x-scroll">
    <div className="flex justify-center font-sans bg-gray-100">
      <div className="w-full lg:w-5/6">
        <div className="my-6 bg-white rounded shadow-md">
          <table className="w-full table-auto min-w-max">
            <thead>
              <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                <th className="px-6 py-3 text-left">Nombre</th>
                <th className="px-6 py-3 text-center">Username</th>
                <th className="px-6 py-3 text-center">Status</th>
                <th className="px-6 py-3 text-center">Rol</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm font-light text-gray-600">
              {USERS_DATA.map((user, key) => (
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  {Object.values(user).map((value, keyValue) => {
                    if (keyValue < 1)
                      return (
                        <td className="px-6 py-3 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium">{value}</span>
                          </div>
                        </td>
                      )
                    return (
                      <td className="px-6 py-3 text-center whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          <span className="font-medium">{value}</span>
                        </div>
                      </td>
                    )
                  })}
                  <td className="px-6 py-3 whitespace-nowrap">
                    <div className="flex items-center justify-center">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)
