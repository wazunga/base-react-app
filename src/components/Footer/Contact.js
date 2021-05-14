import React from 'react'
import { ContactElement } from './ContactElement'
export const Contact = ({ phone, email, address }) => {
  const ContactMain = ({ children }) => (
    <div className="mb-3 text-sm lg:mr-5 lg:ml-8">{children}</div>
  )
  return (
    <ContactMain>
      <p className="text-base font-bold tracking-wide text-gray-900">
        Contacts
      </p>
      <ContactElement label="Phone" value={phone} />
      <ContactElement label="Email" value={email} />
      <ContactElement label="Address" value={address} />
    </ContactMain>
  )
}
