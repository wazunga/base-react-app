import React from 'react'
import { Link } from '@reach/router'
import { HomeIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { useDropdown } from '../../hooks/useDropdown'

export const LinksDropdown = ({ title, path, links }) => {

  const [isDropdownOPen, onClickDropdown, openClasses] = useDropdown()
  console.log(openClasses)

  return (
    <>
      <div
        className={`flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-blue-100 dark:hover:bg-blue-600 ${openClasses}`}
        to={path}
      >
        <Link to={path} className="flex flex-row">
          {/* Module icon*/}
          <span>
            {' '}
            <HomeIcon className="w-5 h-5" />{' '}
          </span>
          <span className="ml-2 text-sm">{title}</span>
        </Link>
        <span className="ml-auto" onClick={onClickDropdown}>
          {' '}
          <ChevronDownIcon className="w-5 h-5" />{' '}
        </span>
      </div>
    </>
  )
}
