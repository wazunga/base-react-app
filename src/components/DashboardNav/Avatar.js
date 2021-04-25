import React from 'react'

export const Avatar = () => (
  <div className="relative">
    <button className="transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100">
      <span class="sr-only">User menu</span>
      <img
        class="w-10 h-10 rounded-full"
        src="https://avatars.githubusercontent.com/u/57622665?s=460&amp;u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&amp;v=4"
        alt="Ahmed Kamel"
      />
    </button>
  </div>
)
