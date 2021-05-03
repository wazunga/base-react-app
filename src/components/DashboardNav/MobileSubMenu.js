import { Transition } from '@headlessui/react'
import React from 'react'
import { BellIcon, SearchIcon, CogIcon } from '@heroicons/react/outline'
import { Avatar } from './Avatar'

export const MobileSubMenu = ({ isSubMenuOpen }) => {
  const Button = ({ Icon, sr }) => (
    <button className="p-2 text-blue-400 rounded-full transition-colors duration-200 bg-blue-50 hover:text-blue-600 hover:bg-blue-100 dark:hover:text-light dark:hover:bg-blue-700 dark:bg-dark focus:outline-none focus:bg-blue-100 dark:focus:bg-blue-700 focus:ring-blue-800">
      <span className="sr-only">{sr}</span>
      <Icon className="w-7 h-7" />
    </button>
  )

  const Buttons = () => (
    <>
      <div className="space-x-2">
        <Button Icon={BellIcon} sr="Notification" />
        <Button Icon={SearchIcon} sr="Search" />
        <Button Icon={CogIcon} sr="Settings" />
      </div>
      <Avatar />
    </>
  )

  return (
    <Transition
      show={isSubMenuOpen}
      enter="transition duration-200 ease-in-out transform sm:duration-500"
      enterFrom="-translate-y-full opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="transition duration-300 ease-in-out transform sm:duration-500"
      leaveFrom="translate-y-0 opacity-100"
      leaveTo="-translate-y-full opacity-0"
      className="absolute flex items-center p-4 bg-white shadow-lg rounded-md dark:bg-darker top-16 inset-x-4 md:hidden"
    >
      <Buttons />
    </Transition>
  )
}
