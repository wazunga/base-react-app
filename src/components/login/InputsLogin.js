import React from 'react'
import { Inputs } from './Inputs'


export const InputsLogin = () =>{


    return(
        <>
        <Inputs label = "username" value = "UserName" isPassword={false}/>
        <Inputs label = "Password" value = "Password" isPassword={true}/>
        </>
    )
}
