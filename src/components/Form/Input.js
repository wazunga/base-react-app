import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import { InputError } from './InputError'
import { InputLabel } from './InputLabel'
import { InputContainer } from './InputContainer'
import { FieldContainer } from './FieldContainer'

export const Input = (props) => (
  <InputContainer>
    <InputLabel {...props} />
    <FieldContainer>
      <Field
        {...props}
        className="w-full p-1 px-2 text-gray-800 outline-none appearance-none"
      />
    </FieldContainer>
    <InputError {...props} />
  </InputContainer>
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
