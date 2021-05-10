import React from 'react'
import PropTypes from 'prop-types'

export const LabelLogin = ({valor1 , valor2}) => {
    const ContainerLabelHead = ({ children }) => (
        <div className="md:w-1/2 max-w-md flex flex-col justify-center">{children}</div>
      )

      const ContactElement1 = ({ value }) => (
           <div className="md:text-4xl text-xl font-black uppercase justify-center">{value}</div>
        )

      const ContactElement2 = ({ value }) => (
        <div className="text-xl mt-4">{value}</div>
     )

     return(
         <ContainerLabelHead>
             <ContactElement1 value={valor1}/>
             <ContactElement2 value = {valor2}/>
         </ContainerLabelHead>
     )
}

LabelLogin.propTypes = {
  valor1: PropTypes.string.isRequired,
  Valor2: PropTypes.string.isRequired,
}