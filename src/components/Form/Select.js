import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import { InputError } from './InputError'
import { InputLabel } from './InputLabel'
import { InputContainer } from './InputContainer'
import { FieldContainer } from './FieldContainer'

export const Select = (props) => (
  <InputContainer>
    <InputLabel {...props} />
    <FieldContainer>
      <Field
        as={props.type}
        {...props}
        className="w-full p-1 px-2 text-gray-800 outline-none appearance-none"
      >
        {props.values.data.map((opt, idx) => (
          <option
            key={idx}
            value={opt[props.values.value]}
            {...(opt.props || {})}
          >
            {opt[props.values.label]}
          </option>
        ))}
      </Field>
    </FieldContainer>
    <InputError {...props} />
  </InputContainer>
)

const valuesShape = {
  value: PropTypes.string,
  label: PropTypes.string,
  data: PropTypes.array
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.shape(valuesShape)
}
