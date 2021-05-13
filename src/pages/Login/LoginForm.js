import React from 'react'
import {Form, Formik} from 'formik'
import {Inputs} from '../../components/Login/Inputs'
import * as Yup from 'yup'
// TODO: Implementar Formik components
// TODO: Sustituir paleta de colores, utilizar dashboard

export const LoginForm = () => (
  <Formik 	
		initialValues={{
			email:'',
			password:''
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
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
		className="flex flex-col justify-center min-h-screen px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32"
	>
		<>
			<Form className="flex flex-col pt-3 md:pt-2">
				<Inputs
					label='Email'
					value='Email'
					FieldType='email'
					name='email'
				/>
				<Inputs
					label='Password'
					value='Password'
					FieldType='password'
					name='password'
				/>

				<button type="submit" className="w-1/2 p-2 mx-auto mt-5 text-lg font-bold text-white bg-black border-black rounded-lg focus:outline-none md:w-5/12 sm:w-2/5 lg:w-1/3 hover:opacity-90 transform hover:scale-105">
					Iniciar Sesión	
				</button>
			</Form>
			<div className="pt-12 pb-12 text-center">
				<p>Password missing? <span className="font-semibold underline">Contact us.</span></p>
			</div>
		</>
  </Formik>
)
