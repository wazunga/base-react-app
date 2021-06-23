import React from 'react'
import { ErrorMessage } from 'formik'

export const InputError = (props) => (
  <div className="w-3/4 h-6 mx-auto mt-3 text-xs text-red-500 xl:w-1/2">
    <ErrorMessage {...props} />
  </div>
)
