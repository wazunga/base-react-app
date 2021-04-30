import React from 'react'
import { Modal } from '../../../../components/Modal'
import { useIsOpen } from '../../../../hooks/useIsOpen'

export const Test = () => {
  const [isOpen, handleIsOpen] = useIsOpen(false)
  console.log(isOpen)

  return (
    <div className="flex items-center justify-center h-full p-4">
      <button 
        onClick={handleIsOpen} 
        className="text-white bg-blue-300 border-4 border-blue-600 button">
        Open modal
      </button>
      {isOpen &&
      <Modal 
        onAction={handleIsOpen}
        isOpen={isOpen}
        onClose={handleIsOpen}
        title="Title"
        content="Content"
      />
      }
    </div>
  )
}
