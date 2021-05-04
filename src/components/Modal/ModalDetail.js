import React from 'react'

export const ModalDetail = ({ title, content }) => (
  <div className="mt-4 text-center sm:mt-0 sm:ml-4 sm:text-left">
    <h2
      className="text-lg font-medium text-gray-900 leading-6"
      id="modal-title"
    >
      {title}
    </h2>
    <div className="mt-3">
      <p className="text-sm text-gray-501">{content}</p>
    </div>
  </div>
)
