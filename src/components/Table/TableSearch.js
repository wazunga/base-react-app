import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

export const TableSearch = ({ value, onChange }) => (
  <div className="relative text-gray-600 shadow-md">
    <input 
      type="search"
      value={value}
      onChange={onChange}
      name="serch" 
      placeholder="Search" 
      class="bg-white h-10 px-5 pr-10 rounded-md text-sm focus:outline-none" 
    />
    <span className="absolute top-0 right-0 mt-3 mr-4">
      <SearchIcon className="w-4 h-4" />
    </span>
  </div>
)
