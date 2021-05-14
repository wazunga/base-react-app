import React from 'react'

export const ButonLogin = ({ ButonNameLogin }) => {
  const Butonl = ({ ButonNameL }) => (
    <div className="mt-6 relative">
      <div className="shadow-md bg-green-500 font-medium py-2 px-4 text-green-100 cursor-pointer bg-teal-600 rounded text-lg tr-mt  absolute text-center w-full">
        {ButonNameL}
      </div>
    </div>
  )

  return <Butonl ButonNameL={ButonNameLogin} />
}
