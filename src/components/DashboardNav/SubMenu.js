import React from 'react'
import { BellIcon, SearchIcon, CogIcon } from '@heroicons/react/outline'
import { Avatar } from './Avatar'

export const SubMenu = () => {
  const Button = ({ Icon, sr }) => (
    <button className="p-2 text-blue-400 transition-colors duration-200 rounded-full bg-blue-50 hover:text-blue-600 hover:bg-blue-100 dark:hover:text-light dark:hover:bg-blue-700 dark:bg-dark focus:outline-none focus:bg-blue-100 dark:focus:bg-blue-700 focus:ring-blue-800">
      <span className="sr-only">{sr}</span>
      <Icon className="w-7 h-7" />
    </button>
  )

  return (
    <nav className="hidden space-x-2 md:flex md:items-center">
      <Button Icon={BellIcon} sr="Notification" />
      <Button Icon={SearchIcon} sr="Search" />
      <Button Icon={CogIcon} sr="Settings" />
      <Avatar />
    </nav>
  )
}
