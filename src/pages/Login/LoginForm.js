import React from 'react'

// TODO: Implementar Formik components
// TODO: Sustituir paleta de colores, utilizar dashboard

export const LoginForm = () => (
  <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
    <p className="text-center text-3xl">Welcome.</p>
    <form className="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
      <div className="flex flex-col pt-4">
        <label for="email" className="text-lg">Email</label>
        <input type="email" id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <div className="flex flex-col pt-4">
        <label for="password" className="text-lg">Password</label>
        <input type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <input type="submit" value="Log In" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
    </form>
    <div className="text-center pt-12 pb-12">
      <p>Password missing? <span className="underline font-semibold">Contact us.</span></p>
    </div>
  </div>
)