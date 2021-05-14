import React from 'react'
import PropTypes from 'prop-types'
import { ErrorDisplayButton } from './ErrorDisplayButton'

export const ErrorDisplay = ({ img, title, message, background }) => {
  const ErrorDisplayMain = ({ children }) => (
    <div
      className={` ${background} dark:bg-gray-800 flex items-center h-screen flex justify-center px-6 py-16`}
    >
      {children}
    </div>
  )
  const ImgContainer = ({ children }) => (
    <div className="flex items-center justify-center w-full md:mt-0 md:w-1/2 md:order-2">
      {children}
    </div>
  )
  const ErrorDisplayContent = ({ children }) => (
    <div className="w-full max-w-lg mt-6 md:w-1/2 md:order-1">{children}</div>
  )
  return (
    <ErrorDisplayMain>
      <ImgContainer>
        <img alt="error-logo" className="w-full h-full max-w-2xl" src={img} />
      </ImgContainer>
      <ErrorDisplayContent>
        <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white md:text-3xl">
          {title}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{message}</p>
        <div className="flex mt-5">
          <ErrorDisplayButton btnLabel="Retroceder" to="/" />
          <ErrorDisplayButton btnLabel="Inicio" to="/" />
        </div>
      </ErrorDisplayContent>
    </ErrorDisplayMain>
  )
}
ErrorDisplay.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  background: PropTypes.string
}
ErrorDisplay.defaultProps = {
  background: 'bg-white'
}
