import { Link } from '@reach/router'
import React from 'react'

export const FormButtons = ({ moduleName }) => (
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
        to={`/dashboard/${moduleName}`}
        className="flex items-center justify-center w-full lg:w-1/2"
      >
        <button
          type="button"
          className="w-5/6 p-2 mx-auto mt-5 text-base font-bold text-white bg-red-500 border-black rounded-lg md:text-base lg:text-lg focus:outline-none lg:w-3/4 hover:opacity-90 transform hover:scale-105"
        >
          Cancelar
            </button>
      </Link>
    </div>
  </div>
)