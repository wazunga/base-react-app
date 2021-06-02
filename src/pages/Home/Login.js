import React, { useState } from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import { LoginSchema } from '../../schema'
import { Loader } from '../../components/Loader'
import { navigate } from '@reach/router'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { connect } from 'react-redux'
import { setToken } from '../../redux/actions/usersActions'

const Login = (props) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)
  const [storedValue, setStoredValue] = useLocalStorage('token', 'token')

  return (
    <>
      <Formik
        initialValues={LoginSchema.initialValues}
        validationSchema={LoginSchema.validations}
        onSubmit={async (values, { setSubmitting }) => {
          setLoading(true)
          try {
            const config = {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ ...values, isTokenRequired: true })
            }
            // TODO: validar erorres de estado de codigo http
            const res = await fetch(
              `${process.env.REACT_APP_URL_API}/users/login`,
              config
            )
            const data = await res.json()
            if (data.status_code === 200) {
              await setStoredValue(data.result.token)
              props.setTokenAction(storedValue)
              setLoading(false)
              setSubmitting(false)
              navigate('/dashboard')
            } else {
              setLoading(false)
              setSubmitting(false)
              alert('Credenciales incorrectas')
            }
          } catch (err) {
            setError(err)
            setLoading(false)
            setSubmitting(false)
          }
        }}
        className="flex mt-8 md:w-1/2 md:justify-end md:mt-0"
      >
        <div className="max-w-sm bg-white rounded-lg dark:bg-gray-800">
          <div className="p-5 text-center">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">
              Iniciar Sesión
            </h2>

            <Form>
              <div className="my-5">
                <Field
                  className="block w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  type="text"
                  name="user_username"
                  placeholder="Username"
                />
                <div className="w-3/4 h-6 mt-3 -mb-3 text-xs text-red-500 xl:w-1/2">
                  <ErrorMessage name="user_username" />
                </div>
                <Field
                  className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  type="password"
                  name="user_password"
                  placeholder="Password"
                />
                <div className="w-3/4 h-6 mt-3 -mb-3 text-xs text-red-500 xl:w-1/2">
                  <ErrorMessage name="user_password" />
                </div>
              </div>
              <div className="flex items-center justify-center -mt-3">
                <button
                  type="submit"
                  className="px-8 py-2 font-semibold text-white bg-gray-900 transition-colors duration-200 transform rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700"
                >
                  Aceptar
                </button>
              </div>
            </Form>
          </div>
          {loading && (
            <div className="flex items-center justify-center pb-6">
              <Loader />
            </div>
          )}
          {error && (
            <div className="flex items-center text-center">
              <span className="px-4 pb-4 text-lg text-red-800">
                Algo salió mal, por favor vuelve a intentarlo
              </span>
            </div>
          )}
        </div>
      </Formik>
    </>
  )
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  setTokenAction: (payload) => dispatch(setToken(payload))
})

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default connect(mapStateToProps, mapDispatchToProps)(Login)
