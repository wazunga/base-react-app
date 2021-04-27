import React from 'react'
import { useIsOpen } from '../../hooks/useIsOpen'
import { useIsActiveClasses } from '../../hooks/useIsActiveClasses'

export const Avatar = () => {
  const avatarMenuClasses = ['absolute hidden right-0 w-48 py-1 bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none', 'absolute right-0 w-48 py-1 bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none']

  const [classes] = useIsActiveClasses(avatarMenuClasses)
  const [isMenuOpen, handleIsMenuOpen] = useIsOpen(false)

  return (
    <div className="relative">
      <button 
        className="transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
        onClick={handleIsMenuOpen}
      >
        <span class="sr-only">User menu</span>
        <img
          class="w-10 h-10 rounded-full"
          src="https://avatars.githubusercontent.com/u/57622665?s=460&amp;u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&amp;v=4"
          alt="Ahmed Kamel"
        />
      </button>
      <div className={`${classes(isMenuOpen)}`}>
        <span role="menuitem" class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-blue-600">
          Your Profile
        </span>
        <span role="menuitem" class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-blue-600">
          Logout
        </span>
        <span role="menuitem" class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-blue-600">
          Settings
        </span>
      </div>
    </div>
  )
}
