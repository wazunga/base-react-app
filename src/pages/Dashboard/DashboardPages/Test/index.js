import React from 'react'
import { Modal } from '../../../../components/Modal'
import { useIsOpen } from '../../../../hooks/useIsOpen'

export const Test = () => {
  const [isOpen, handleIsOpen] = useIsOpen(false)
  console.log(isOpen)

  return (
    <>
      <div className="p-4">
        <button 
          onClick={handleIsOpen} 
          className="text-white bg-blue-300 border-4 border-blue-600 button">
          Open modal
        </button>
      </div>
      {isOpen &&
      <Modal 
        onAction={handleIsOpen}
        isOpen={isOpen}
        onClose={handleIsOpen}
        title="Title"
        content="Content"
      />
      }
    </>
  )
}
