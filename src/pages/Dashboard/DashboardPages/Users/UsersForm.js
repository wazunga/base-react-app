import React from 'react'
import { Form, Formik } from 'formik'
import { Inputs } from '../../../../components/Login/Inputs'
import { FormButtons } from '../../../../components/FormButtons'
import { userValidationSchema } from '../../../../validations'

export const UsersForm = ({
  user = {
    user_id: 0,
    user_name: '',
    user_username: '',
    user_role: '',
    user_status: ''
  }
}) => (
  <Formik
    initialValues={user}
    validationSchema={userValidationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }, 400)
    }}
    className="flex flex-col justify-center min-h-screen px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32"
  >
    <Form className="flex flex-col pt-3 md:pt-2">
      <Inputs label="Nombre" value="Nombre" FieldType="text" name="user_name" />
      <Inputs
        label="Username"
        value="Username"
        FieldType="text"
        name="user_username"
      />
      <Inputs label="Rol" value="Rol" FieldType="text" name="user_role" />
      <Inputs
        label="Estado"
        value="Estado"
        FieldType="text"
        name="user_status"
      />

      <FormButtons moduleName="users" />
    </Form>
  </Formik>
)
