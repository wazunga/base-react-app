import React from 'react'
import { LabelLogin } from '../../components/login/LabelLogin'
import { InputsLogin } from '../../components/login/InputsLogin'
import { ButonLogin } from '../../components/login/ButonLogin'



export const Login = () => {

  //////////beging Data Props///////

  const DataTitulos ={
    valor1: 'AWESOME TOOL FOR YOUR FUTURE TEAM',
    valor2: 'Develop your workforce and make it a selling machine'
  }
  
    //////////end Data Props///////


   const ContainerFormlogin = ({ children }) => (
    <div className="mx-auto max-w-6xl p-12 h-screen flex items-center justify-center">{children}</div>
  )

   const ContainerLabelLogin = ({ children }) => (
    <div className="flex flex-col md:flex-row justify-center bg-gray-200 px-8 py-8">{children}</div>
    )


    const ContainerInputs = ({ children }) =>(
      <div className="md:w-1/2 flex mt-5 md:justify-end w-full mx-auto">{ children }</div>
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

