import React from 'react'
import PropTypes from 'prop-types'
import { Field, ErrorMessage } from 'formik'

export const Inputs = ({ label, value, FieldType, name }) => (
  <div className="w-full">
    <div className="w-3/4 h-6 mx-auto mt-3 text-xs font-bold text-gray-600 uppercase xl:w-1/2 leading-8">
      <span className="mr-1 text-red-400">*</span> {value}
    </div>
    <div className="flex w-3/4 p-1 mx-auto my-2 bg-white border border-gray-200 rounded xl:w-1/2">
      <Field
        name={name}
        placeholder={label}
        type={FieldType}
        className="w-full p-1 px-2 text-gray-800 outline-none appearance-none"
      />
    </div>
    <div className="w-3/4 h-6 mx-auto mt-3 text-xs text-red-500 xl:w-1/2">
      <ErrorMessage name={name} />
    </div>
  </div>
)

Inputs.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  FieldType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
