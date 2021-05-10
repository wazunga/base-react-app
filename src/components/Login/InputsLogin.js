import React from 'react'
import { Inputs } from './Inputs'
import {Form} from 'formik'
export const InputsLogin = () =>{
    return(
        <Form>
					<Inputs label = "username" value = "UserName" FieldType='text' name='username'/>
					<Inputs label = "Password" value = "Password" FieldType='password' name='password'/>
        </Form>
    )
}
