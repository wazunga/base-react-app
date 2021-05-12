import React from 'react'
import { ImageSection } from './ImageSection'
import { LoginContainer } from './LoginPageContainer'
import { LoginSection } from './LoginSection'

export const Login = () => (
  <LoginContainer>
    <LoginSection />
    <ImageSection />
  </LoginContainer>
)

/*
export const Login = () => {

  //////////beging Data Props///////
	const DataTitulos ={
    valor1: 'AWESOME TOOL FOR YOUR FUTURE TEAM',
    valor2: 'Develop your workforce and make it a selling machine'
  }  
  //////////end Data Props/////// 


	const ContainerFormlogin = ({ children }) => (
		<div className="flex items-center justify-center h-screen max-w-6xl p-12 mx-auto">{children}</div>
	)
	 const ContainerLabelLogin = ({ children }) => (
		<div className="flex flex-col justify-center px-8 py-8 bg-gray-200 md:flex-row">{children}</div>
	)
		const ContainerInputs = ({ children }) =>(
			<Formik 
				initialValues={{
					username:'',
					password:''
				}}
				validationSchema={Yup.object({
					username: Yup.string()
						.max(25, 'Caracteres maximos 25')
						.min(5, 'Caracteres minimos 5')
						.required('Required'),
					password: Yup.string()
						.max(30, 'Caracteres maximos 25')
						.min(8, 'Caracteres minimos 8')
						.required('Required')
				})}
				className="flex w-full mx-auto mt-5 md:w-1/2 md:justify-end">{ children }
			</Formik>
	)
		const ContainerInputs2 = ({ children }) =>(
			<div class="shadow-md flex-auto max-w-sm p-10 pb-20">{ children }</div>
	)
	return(
		<ContainerFormlogin>
			<ContainerLabelLogin>
				<LabelLogin {...DataTitulos} />
				<ContainerInputs>
					<ContainerInputs2>
						<InputsLogin />
						<ButonLogin ButonNameLogin = "Iniciar Sesion"/>
					</ContainerInputs2>
				</ContainerInputs>
			</ContainerLabelLogin>
		</ContainerFormlogin>
	) 
}
*/
