import React from 'react'

export const InputLabel = ({ label }) => (
  <div className="w-3/4 h-6 mx-auto mt-3 text-xs font-bold text-gray-600 uppercase xl:w-1/2 leading-8">
    <span className="mr-1 text-red-400">*</span> {label}
  </div>
)
