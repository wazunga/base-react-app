import React from 'react'

export const ErrorDisplay = ({ img, title, message, background = 'bg-white' }) => (
  <header
    className={` ${background} dark:bg-gray-800 flex items-center h-screen`}
  >
    <div className="container px-6 py-16 mx-auto">
      <div className="items-center md:flex">
        <div className="flex items-center justify-center w-full md:mt-0 md:w-1/2 md:order-2">
          <img alt="error-logo" className="w-full h-full max-w-2xl" src={img} />
        </div>

        <div className="w-full md:w-1/2 md:order-1 mt-6">
          <div className="max-w-lg">
            <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white md:text-3xl">
              {title}
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{message}</p>
            <button className="px-3 py-2 mt-4 mx-2 text-sm font-medium text-white uppercase bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
              Shop Now
            </button>
            <button className="px-3 py-2 mt-4 mx-2 text-sm font-medium text-white uppercase bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
)

