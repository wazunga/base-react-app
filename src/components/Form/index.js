import React from 'react'
import { Form as Formk, Formik } from 'formik'
import { FormButtons } from './FormButtons'
import { Input } from './Input'

export const Form = ({ initialValues, schema }) => (
  <Formik
		initialValues={initialValues !== undefined ? initialValues : schema.initialValues}
    validationSchema={schema.validations}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }, 400)
    }}
    className="flex flex-col justify-center min-h-screen px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32"
  >
    <Formk className="flex flex-col pt-3 md:pt-2">
			{schema.fields.map((field, key) => (
				<Input key={key} 
					label={field.label} 
					placeholder={field.placeholder} 
					type={field.type} 
					name={field.name} 
				/>
			))}
      <FormButtons moduleName="users" />
    </Formk>
  </Formik>
)

