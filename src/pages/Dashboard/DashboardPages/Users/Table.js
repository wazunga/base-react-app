import React from 'react'

export const Table = ({ children }) => (
  <div className="overflow-x-scroll">
    <div className="flex justify-center font-sans bg-gray-100">
      <div className="w-full lg:w-5/6">
        <div className="my-6 bg-white rounded shadow-md">
          <table className="w-full table-auto min-w-max">
            {children}
          </table>
        </div>
      </div>
    </div>
  </div>
)
