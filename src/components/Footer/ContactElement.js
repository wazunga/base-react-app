import React from 'react'

export const ContactElement = ({ label, value }) => (
  <div className="flex">
    <p className="mr-1 text-gray-800">
      {label}: {value}
    </p>
  </div>
)
