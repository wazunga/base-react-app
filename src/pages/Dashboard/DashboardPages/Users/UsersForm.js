import React from 'react'
import { Form, Formik } from 'formik'
import { Link } from '@reach/router'
import { Inputs } from '../../../../components/Login/Inputs'
import * as Yup from 'yup'

export const UsersForm = () => (
  <Formik
    initialValues={{
      email: '',
      password: ''
    }}
    validationSchema={Yup.object({
      email: Yup.string()
      .max(25, 'Caracteres maximos 25')
      .min(5, 'Caracteres minimos 5')
      .email('Invalid email address')
      .required('Required'),
      password: Yup.string()
      .max(30, 'Caracteres maximos 25')
      .min(8, 'Caracteres minimos 8')
      .required('Required')
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }, 400)
    }}
    className="flex flex-col justify-center min-h-screen px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32"
  >
    <Form className="flex flex-col pt-3 md:pt-2">
      <Inputs label="Email" value="Email" FieldType="email" name="email" />
      <Inputs
        label="Password"
        value="Password"
        FieldType="password"
        name="password"
      />

      <div className="w-full">
        <div className="flex flex-col items-center justify-center w-1/2 mx-auto lg:flex-row">
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <button
              type="submit"
              className="w-5/6 p-2 mx-auto mt-5 text-base font-bold text-white bg-blue-500 border-black rounded-lg md:text-base lg:text-lg focus:outline-none lg:w-3/4 hover:opacity-90 transform hover:scale-105"
            >
              Guardar usuario
            </button>
          </div>
          <Link 
            to="../"
            className="flex items-center justify-center w-full lg:w-1/2">
            <button
              type="button"
              className="w-5/6 p-2 mx-auto mt-5 text-base font-bold text-white bg-red-500 border-black rounded-lg md:text-base lg:text-lg focus:outline-none lg:w-3/4 hover:opacity-90 transform hover:scale-105"
            >
              Cancelar
            </button>
          </Link>
        </div>
      </div>
    </Form>
  </Formik>
)
