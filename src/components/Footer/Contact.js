import React, {Fragment} from 'react'

export const Contact = ({phone, email, address}) => (
	<Fragment>

        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone: {phone}</p>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email: {email}</p>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address: {address}</p>
          </div>
        </div>
	</Fragment>
)

