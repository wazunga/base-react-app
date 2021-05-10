import React from 'react'
import PropTypes from 'prop-types'
import {Field, ErrorMessage} from 'formik'

export const Inputs = ({label, value, FieldType, name}) =>(
    <div class="w-full">
        <div className="h-6 mt-3 text-xs font-bold text-gray-600 uppercase leading-8">
            <span className="mr-1 text-red-400">*</span> {value}
        </div>
        <div className="flex p-1 my-2 bg-white border border-gray-200 rounded">
            <Field 
							name = {name}
							placeholder={label}	
							type= {FieldType} 
							className="w-full p-1 px-2 text-gray-800 outline-none appearance-none"/> 
         </div>
					<div className="h-6 mt-3 text-xs text-red-500">
						 <ErrorMessage name={name}/>
					</div>

     </div>     
    )

    Inputs.propTypes = {
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        FieldType: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired
      }
