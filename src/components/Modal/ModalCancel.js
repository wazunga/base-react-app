import React from 'react'

export const ModalCancel = ({ onClose }) => (
  <button
    type="button"
    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
    onClick={onClose}
  >
    Cancelar
  </button>
)