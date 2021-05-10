import React from 'react'
import PropTypes from 'prop-types'

export const Inputs = ({label, value, isPassword}) =>(
    <div class="w-full">
        <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            <span className="text-red-400 mr-1">*</span> {value}
        </div>
        <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
            <input placeholder={label} type={isPassword?"password":"text"} className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/> 
         </div>
     </div>     
    )

    Inputs.propTypes = {
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        isPassword: PropTypes.bool.isRequired
      }