import React from 'react'

export const ModalContainer = ({ children }) => (
  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      {/* This div makes posible to centering modal */}
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div className="inline-block overflow-hidden text-left align-bottom bg-white rounded-lg shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        {children}
      </div>
    </div>
  </div>
)